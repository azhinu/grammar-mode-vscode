"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.applySyntax = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const console_1 = require("console");
const vscode_1 = require("vscode");
// Activate
async function activate(context) {
    // Run on save
    vscode_1.workspace.onDidSaveTextDocument((doc) => {
        vscode_1.window.showWarningMessage('Start id');
        // Get editor content
        let editor = vscode_1.window.activeTextEditor;
        // Run only for currect editor
        (0, console_1.log)('First', (editor && doc == editor.document), 'Editor:', editor, 'Doc:', doc, 'Editor.document: ', vscode_1.window.activeTextEditor);
        if (editor && doc == editor.document) {
            applySyntax(doc);
        }
    });
}
exports.activate = activate;
async function applySyntax(doc) {
    // Get first lines count < 4. Starting by 0
    let textLines = 3;
    if ((doc.lineCount - 1) < textLines) {
        textLines = doc.lineCount - 1;
    }
    // Get text
    let syntax = doc.getText(new vscode_1.Range(doc.lineAt(0).range.start, doc.lineAt(textLines).range.end));
    // Regexp syntax=$
    syntax = syntax.match(/(?<=syntax=)(?:\w+[-.]?)+/g)[0];
    console.log("Match:", syntax);
    if (syntax) {
        if (!(await vscode_1.languages.getLanguages()).includes(syntax)) {
            vscode_1.window.showWarningMessage('Wrong syntax id', syntax);
            return false;
        }
        if (!vscode_1.languages.match(syntax, doc)) {
            return vscode_1.languages.setTextDocumentLanguage(doc, syntax);
        }
    }
}
exports.applySyntax = applySyntax;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map