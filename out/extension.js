"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "test-file-keybinding-extension" is now active!');
    let disposable = vscode.commands.registerCommand('test-file-keybinding-extension.helloWorld', () => {
        let current_file = vscode.window.activeTextEditor;
        if (current_file != undefined) {
            console.log(current_file.document.uri);
            let end_of_file;
            let myRe = /(.+\/)*(.+)\.(.+)$/;
            let regexArray = myRe.exec(current_file.document.uri.path);
            if (regexArray != null) {
                console.log(regexArray[2]);
                end_of_file = regexArray[2];
                // let test_file_path:string = current_file.document.uri.path + '../spec/' + end_of_file + '_spec.lua'
                // vscode.window.showInformationMessage(current_file.document.uri.path);
                // vscode.workspace.openTextDocument(test_file_path)
            }
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map