// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { debug, log } from 'console';
import { link } from 'fs';
import {
  ExtensionContext,
  window,
  workspace,
  languages,
  Range
} from 'vscode'


// Activate
export async function activate(context: ExtensionContext) {
  // Run on save
  workspace.onDidSaveTextDocument((doc: any) => {

    window.showWarningMessage('Start id')
    // Get editor content
    let editor = window.activeTextEditor
    // Run only for currect editor
    log('First',(editor && doc == editor.document), 'Editor:', editor, 'Doc:', doc, 'Editor.document: ', window.activeTextEditor)
    if (editor && doc == editor.document) {
      applySyntax(doc)
    }
  })
}


export async function applySyntax(doc: any) {
  // Get first lines count < 4. Starting by 0
  let textLines = 3
  if ((doc.lineCount - 1) < textLines ) {
    textLines = doc.lineCount - 1
  }
  // Get text
  let syntax = doc.getText(new Range(doc.lineAt(0).range.start, doc.lineAt(textLines).range.end))
  // Regexp syntax=$
  syntax = syntax.match(/(?<=syntax=)(?:\w+[-.]?)+/g)[0]
  console.log("Match:",syntax);
  
  if (syntax) {
    if (!(await languages.getLanguages()).includes(syntax)) {
      window.showWarningMessage('Wrong syntax id',syntax)
      return false;
    }
    if (!languages.match(syntax, doc)) {
      return languages.setTextDocumentLanguage(doc, syntax)
    }
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}