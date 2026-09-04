// Syntax and asset checks for this build-free static site.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = __dirname;
let checked = 0;
function check(code, filename) {
    new vm.Script(code, {filename});
    checked++;
}
try {
    for (const directory of ["", "game"]) {
        for (const file of fs.readdirSync(path.join(root, directory))) {
            if (file.endsWith(".js")) {
                const name = path.join(directory, file);
                check(fs.readFileSync(path.join(root, name), "utf8"), name);
            }
        }
    }
    for (const filename of ["index.html", "quiz.html"]) {
        const html = fs.readFileSync(path.join(root, filename), "utf8");
        for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
            const source = match[1].match(/\bsrc=["']([^"']+)["']/i);
            if (source) {
                if (/^https?:\/\//.test(source[1])) continue;
                const file = source[1].split("?")[0];
                if (!fs.existsSync(path.join(root, file))) throw new Error("Missing script: " + file);
            } else {
                const line = html.slice(0, match.index).split("\n").length;
                check(match[2], filename + ":" + line);
            }
        }
    }
    console.log("Syntax and script assets OK (" + checked + " scripts)");
} catch (error) {
    console.error(error.stack);
    process.exitCode = 1;
}
