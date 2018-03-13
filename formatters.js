
/*
format
*/



const vscode  = require('vscode');




function format(doc, range, defaults) {
    return 5
}






/*
 // 擴展函數
*/

function allOf(doc) {
    return doc.validateRange( new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE) );
}

exports.format = format;
exports.allOf = allOf;