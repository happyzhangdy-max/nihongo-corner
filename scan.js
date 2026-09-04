var _scanImageData = null;
var _scanHistory = [];
var _scanGeneration = 0;
var _scanBusy = false;
var _scanController = null;
var _scanReader = null;
var SCAN_MAX_BYTES = 20 * 1024 * 1024;

function triggerUpload() { document.getElementById("scanFileInput").click(); }
function triggerCamera() { document.getElementById("scanCameraInput").click(); }

function cancelScanRequest() {
    _scanGeneration++;
    if (_scanController) _scanController.abort();
    if (_scanReader && _scanReader.readyState === 1) _scanReader.abort();
    _scanController = null;
    _scanReader = null;
    _scanBusy = false;
}

function setScanBusy(busy, message) {
    _scanBusy = busy;
    var button = document.getElementById("scanDoBtn");
    button.disabled = busy;
    button.textContent = busy ? "处理中..." : "🔍 识别并翻译";
    document.getElementById("scanLoading").style.display = busy ? "block" : "none";
    document.getElementById("scanLoadingText").textContent = message || "正在识别并翻译，请稍候...";
}

function showScanError(message) {
    var error = document.getElementById("scanError");
    error.textContent = message || "";
    error.style.display = message ? "block" : "none";
}

function handleScanFile(input) {
    var file = input.files && input.files[0];
    input.value = "";
    if (file) readScanFile(file);
}

function readScanFile(file) {
    if (file.size > SCAN_MAX_BYTES) {
        showScanError("图片太大，请选择 20MB 以下的图片");
        return;
    }
    if (!file.size || (!/^image\//i.test(file.type) &&
        !(!file.type && /\.(jpe?g|png|webp|gif|bmp|heic|heif)$/i.test(file.name)))) {
        showScanError("请选择有效的图片文件（JPG、PNG 或 WebP）");
        return;
    }

    clearScanImage();
    var generation = _scanGeneration;
    setScanBusy(true, "正在读取图片...");
    var reader = _scanReader = new FileReader();
    reader.onload = function() {
        if (generation !== _scanGeneration) return;
        _scanReader = null;
        setScanBusy(false);
        loadScanImage(reader.result);
    };
    reader.onerror = function() {
        if (generation !== _scanGeneration) return;
        _scanReader = null;
        setScanBusy(false);
        showScanError("无法读取图片，请重新选择");
    };
    try {
        reader.readAsDataURL(file);
    } catch (error) {
        reader.onerror();
    }
}

function loadScanImage(data) {
    cancelScanRequest();
    _scanImageData = data;
    showScanError("");
    document.getElementById("scanEmpty").style.display = "none";
    document.getElementById("scanPreview").style.display = "block";
    document.getElementById("scanResult").style.display = "none";
    document.getElementById("scanImage").src = data;
    return doScan();
}

function clearScanImage() {
    cancelScanRequest();
    _scanImageData = null;
    document.getElementById("scanImage").removeAttribute("src");
    document.getElementById("scanEmpty").style.display = "block";
    document.getElementById("scanPreview").style.display = "none";
    document.getElementById("scanResult").style.display = "none";
    document.getElementById("scanFileInput").value = "";
    document.getElementById("scanCameraInput").value = "";
    showScanError("");
    setScanBusy(false);
}

function compressImage(data, maxSide) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        var timer = setTimeout(function() {
            finish(new Error("图片解码超时，请重新选择 JPG 或 PNG 图片"));
        }, 15000);
        function finish(error, result) {
            clearTimeout(timer);
            image.onload = image.onerror = null;
            if (error) reject(error);
            else resolve(result);
        }
        image.onerror = function() {
            finish(new Error("无法解码图片；HEIC/HEIF 请先转换为 JPG 或 PNG"));
        };
        image.onload = function() {
            try {
                var width = image.naturalWidth || image.width;
                var height = image.naturalHeight || image.height;
                if (!width || !height) throw new Error("图片尺寸无效，请重新选择");
                var scale = Math.min(1, maxSide / Math.max(width, height));
                var canvas = document.createElement("canvas");
                canvas.width = Math.max(1, Math.round(width * scale));
                canvas.height = Math.max(1, Math.round(height * scale));
                var context = canvas.getContext("2d");
                if (!context) throw new Error("浏览器无法处理图片，请更换浏览器重试");
                // Normalize all formats and bound portrait photos too; preserve transparent text on white.
                context.fillStyle = "#fff";
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                var result = canvas.toDataURL("image/jpeg", 0.9);
                if (!result.startsWith("data:image/jpeg;base64,")) throw new Error("图片转换失败");
                finish(null, result);
            } catch (error) {
                finish(error);
            }
        };
        image.src = data;
    });
}

async function doScan() {
    if (_scanBusy) return;
    if (!_scanImageData) return showScanError("请先选择一张图片");
    if (!_scanConfig.apiUrl) return showScanError("服务未配置，请联系管理员");

    var generation = ++_scanGeneration;
    var controller = _scanController = new AbortController();
    showScanError("");
    document.getElementById("scanResult").style.display = "none";
    document.getElementById("scanPreview").style.display = "block";
    setScanBusy(true);
    try {
        var image = await compressImage(_scanImageData, 1600);
        if (generation !== _scanGeneration) return;
        var result = await callScanAnalyze(image, controller.signal);
        if (generation !== _scanGeneration) return;
        if (!result.jp && !result.cn && !result.analysis) {
            throw new Error("未能识别图片内容，请换一张更清晰的图片");
        }
        showScanResult(result.jp, result.cn, result.analysis);
    } catch (error) {
        if (generation !== _scanGeneration || error.name === "AbortError") return;
        // Keep the selected image available for an immediate retry.
        document.getElementById("scanPreview").style.display = "block";
        showScanError(scanErrorMessage(error));
    } finally {
        if (generation === _scanGeneration) {
            _scanController = null;
            setScanBusy(false);
        }
    }
}

function scanErrorMessage(error) {
    var message = error.message || "未知错误";
    if (/balance|insufficient|HTTP 402/i.test(message)) return "服务额度不足，请联系管理员";
    if (/no endpoints|model.+not found|HTTP 404/i.test(message)) return "识图模型暂不可用，请稍后重试或联系管理员";
    if (/HTTP 429/i.test(message)) return "请求过于频繁，请稍后重试";
    if (/HTTP 401|HTTP 403/i.test(message)) return "识图服务授权失败，请联系管理员";
    return "识别失败：" + message;
}

function parseScanResponse(text) {
    var fields = {};
    var headings = /【(日文原文|中文翻译|语境讲解|题目解析|单词讲解|语法分析)】/g;
    var matches = Array.from(text.matchAll(headings));
    matches.forEach(function(match, index) {
        var value = text.slice(match.index + match[0].length,
            index + 1 < matches.length ? matches[index + 1].index : text.length);
        value = value.trim().replace(/^\*{1,2}\s*|\s*\*{1,2}$/g, "").trim();
        fields[match[1]] = /^(无|なし|未能识别|（无）|\(无\))$/.test(value) ? "" : value;
    });
    var sections = [
        ["语境讲解", "💬"], ["题目解析", "📝"], ["单词讲解", "📖"], ["语法分析", "🔧"]
    ].filter(function(section) { return fields[section[0]]; })
        .map(function(section) { return section[1] + " " + section[0] + "\n" + fields[section[0]]; });
    return {
        jp: fields["日文原文"] || "",
        cn: fields["中文翻译"] || "",
        analysis: matches.length ? sections.join("\n\n") : (/^(无|なし)$/.test(text.trim()) ? "" : text.trim())
    };
}

async function callScanAnalyze(image, signal) {
    var text = await callAI(_scanConfig.apiUrl, _scanConfig.model, [{
        role: "user",
        content: [
            {type: "image_url", image_url: {url: image}},
            {type: "text", text: SCAN_PROMPT}
        ]
    }], 4096, _scanConfig.apiKey, {timeout: 90000, signal: signal});
    return parseScanResponse(text);
}

function showScanResult(jp, cn, analysis, save) {
    document.getElementById("scanLoading").style.display = "none";
    document.getElementById("scanResult").style.display = "block";
    document.getElementById("scanPreview").style.display = "none";
    document.getElementById("scanEmpty").style.display = "none";
    document.getElementById("scanFullJp").textContent = jp || "未返回日文原文";
    document.getElementById("scanFullCn").textContent = cn || "";
    document.getElementById("scanAnalysisLoading").style.display = "none";
    var content = document.getElementById("scanAnalysisContent");
    content.style.display = "block";
    content.style.whiteSpace = "pre-wrap";
    content.textContent = analysis || "未返回详细解析，可查看原文和译文";
    switchScanView("parallel", document.querySelector(".scan-result-tab"));
    if (save !== false) saveScanHistory(jp, cn, analysis);
}

function switchScanView(view, tab) {
    document.querySelectorAll(".scan-result-tab").forEach(function(item) {
        item.classList.remove("active");
    });
    if (tab) tab.classList.add("active");
    document.getElementById("scanParallel").style.display = view === "parallel" ? "block" : "none";
    document.getElementById("scanFullOrig").style.display = view === "orig" ? "block" : "none";
    document.getElementById("scanFullTrans").style.display = view === "trans" ? "block" : "none";
}

async function copyScanResult() {
    var text = document.getElementById("scanFullCn").textContent;
    if (!text) return showT("没有可复制的译文");
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            var area = document.createElement("textarea");
            area.value = text;
            document.body.appendChild(area);
            area.select();
            try {
                if (!document.execCommand("copy")) throw new Error("复制失败");
            } finally {
                area.remove();
            }
        }
        showT("✅ 译文已复制到剪贴板");
    } catch (error) {
        showT("复制失败，请手动复制");
    }
}

function saveScanHistory(jp, cn, analysis) {
    _scanHistory.unshift({jp: jp, cn: cn, analysis: analysis, time: new Date().toLocaleString()});
    _scanHistory = _scanHistory.slice(0, 10);
    try {
        localStorage.setItem("scanHist", JSON.stringify(_scanHistory));
    } catch (error) {
        showT("识别成功，但历史记录未保存：浏览器存储空间不足或不可用");
    }
    renderScanHistory();
}

function renderScanHistory() {
    var list = document.getElementById("scanHistoryList");
    list.textContent = "";
    document.getElementById("scanHistory").style.display = _scanHistory.length ? "block" : "none";
    _scanHistory.forEach(function(entry, index) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "plan-card scan-history-item";
        var time = document.createElement("div");
        time.className = "scan-history-time";
        time.textContent = entry.time;
        var preview = document.createElement("div");
        preview.className = "scan-history-preview";
        preview.textContent = (entry.cn || entry.jp || entry.analysis).slice(0, 100);
        button.appendChild(time);
        button.appendChild(preview);
        button.addEventListener("click", function() {
            clearScanImage();
            showScanResult(entry.jp, entry.cn, entry.analysis, false);
        });
        list.appendChild(button);
    });
}

function loadScanHistory() {
    _scanHistory = [];
    try {
        var stored = JSON.parse(localStorage.getItem("scanHist") || "[]");
        if (Array.isArray(stored)) {
            _scanHistory = stored.filter(function(entry) {
                return entry && typeof entry.jp === "string" && typeof entry.cn === "string";
            }).slice(0, 10).map(function(entry) {
                return {jp: entry.jp, cn: entry.cn,
                    analysis: typeof entry.analysis === "string" ? entry.analysis : "",
                    time: typeof entry.time === "string" ? entry.time : ""};
            });
        }
    } catch (error) { /* A damaged history must not prevent image recognition. */ }
    renderScanHistory();
}

function clearScanHistory() {
    if (!confirm("确定清空拍照识图历史？")) return;
    try {
        localStorage.removeItem("scanHist");
    } catch (error) {
        showT("历史记录清除失败，请检查浏览器存储权限");
        return;
    }
    _scanHistory = [];
    renderScanHistory();
    showT("✅ 识图记录已清空");
}

document.addEventListener("paste", function(event) {
    if (!document.getElementById("p-scan").classList.contains("active")) return;
    var items = event.clipboardData && event.clipboardData.items;
    if (!items) return;
    for (var index = 0; index < items.length; index++) {
        if (!/^image\//.test(items[index].type)) continue;
        var file = items[index].getAsFile();
        if (!file) continue;
        event.preventDefault();
        readScanFile(file);
        break;
    }
});

document.getElementById("scanUploadArea").addEventListener("click", function(event) {
    if (!event.target.closest("button")) triggerUpload();
});

var SCAN_PROMPT = "你是一位日语老师。用户上传了一张包含日文的图片（可能是试题、文章、句子等），请像老师一样全面讲解：\n1. **识图提取**：先完整写出图片中所有日文文字\n2. **中文翻译**：逐句翻译成中文\n3. **语境讲解**：这段话是什么意思，在什么场景下使用，表达了什么语气\n4. **题目解析**：如果图片中是试题/练习题，请解析题目要求和解题思路、正确答案\n5. **单词讲解**：讲解关键单词，每个汉字词标注读音（例：駅（えき）、勉強（べんきょう））\n6. **语法分析**：说明句中关键语法点的含义和用法\n\n按以下格式输出（每个字段若没有则写「无」）：\n\n【日文原文】\n（完整日文原文）\n\n【中文翻译】\n（中文翻译）\n\n【语境讲解】\n（语境语义、使用场景等）\n\n【题目解析】\n（如果是试题则写解析，否则写「无」）\n\n【单词讲解】\n（单词（读音）= 释义\n 单词（读音）= 释义）\n\n【语法分析】\n（语法点讲解）";
