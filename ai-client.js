// Public proxy URLs only. Provider credentials remain on the server.
var _searchWorkerUrl = "https://damp-cell-c1f2.happyzhangdy.workers.dev";
var _scanWorkerUrl = _searchWorkerUrl;
var _searchConfig = {
    apiUrl: _searchWorkerUrl + "/v1/or/chat/completions",
    model: "deepseek/deepseek-v4-flash",
    apiKey: ""
};
var _scanConfig = {
    apiUrl: _scanWorkerUrl + "/v1/or/chat/completions",
    model: "google/gemini-2.5-flash",
    apiKey: ""
};

function callAI(url, model, messages, maxTokens, apiKey, options) {
    options = options || {};
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var signal = options.signal;
        var settled = false;

        function finish(error, text) {
            if (settled) return;
            settled = true;
            if (signal) signal.removeEventListener("abort", abort);
            if (error) reject(error);
            else resolve(text);
        }
        function abort() {
            xhr.abort();
            var error = new Error("请求已取消");
            error.name = "AbortError";
            finish(error);
        }
        if (signal && signal.aborted) return abort();

        try {
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            if (apiKey) xhr.setRequestHeader("Authorization", "Bearer " + apiKey);
            xhr.timeout = options.timeout || 45000;
            xhr.onload = function() {
                var data;
                try {
                    data = JSON.parse(xhr.responseText);
                } catch (error) {
                    return finish(new Error(xhr.status >= 400
                        ? "服务返回 HTTP " + xhr.status + "，请稍后重试"
                        : "服务返回了无法解析的内容，请重试"));
                }
                if (!data || typeof data !== "object") {
                    return finish(new Error("服务返回了无效响应，请重试"));
                }
                if (xhr.status < 200 || xhr.status >= 300 || data.error) {
                    var detail = data.error && data.error.message;
                    return finish(new Error("HTTP " + xhr.status + (detail ? "：" + detail : "：请求失败")));
                }
                var choice = data.choices && data.choices[0];
                if (choice && choice.finish_reason === "length") {
                    return finish(new Error("内容过长，回复未完成；请缩小图片范围或缩短搜索内容"));
                }
                var content = choice && choice.message && choice.message.content;
                if (Array.isArray(content)) {
                    content = content.filter(function(part) {
                        return part && part.type === "text" && typeof part.text === "string";
                    }).map(function(part) { return part.text; }).join("\n");
                }
                if (typeof content !== "string" || !content.trim()) {
                    return finish(new Error("服务未返回有效内容，请重试"));
                }
                finish(null, content.trim());
            };
            xhr.onerror = function() { finish(new Error("网络连接失败，请检查网络后重试")); };
            xhr.ontimeout = function() { finish(new Error("请求超时，请重试或缩小图片范围")); };
            xhr.onabort = function() {
                var error = new Error("请求已取消");
                error.name = "AbortError";
                finish(error);
            };
            if (signal) signal.addEventListener("abort", abort, {once: true});
            xhr.send(JSON.stringify({
                model: model,
                messages: messages,
                max_tokens: maxTokens || 2048,
                temperature: 0.1
            }));
        } catch (error) {
            finish(error);
        }
    });
}
