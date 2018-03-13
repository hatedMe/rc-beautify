/*
format
*/

const vscode = require('vscode');
const fs = require('fs');
const esformatter = require('esformatter');
esformatter.register(require('esformatter-jsx'));

var opt = {
    "jsx": {
        "htmlOptions": { // same as the ones passed to js-beautifier.html
            //"brace_style": "collapse",
            "indent_char": " ",
            "indent_size": 4,
            // max_preserve_newlines: 2, "max_preserve_newlines": 1, "preserve_newlines":
            // true wrap_line_length: 250
        }
    }
}

// const str = fs.readFileSync('someKewlFile.js').toString(); const output =
// esformatter.format(str);

function format(str) {
    return esformatter.format(str.toString(), opt);
}

/*
 // 擴展函數
*/

function allOf(doc) {
    return doc.validateRange(new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE));
}

exports.format = format;
exports.allOf = allOf;