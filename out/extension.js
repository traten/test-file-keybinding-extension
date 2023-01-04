"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "test-file-keybinding-extension" is now active!');
    let disposable = vscode.commands.registerCommand('test-file-keybinding-extension.toggleTestFile', () => {
        let current_file = vscode.window.activeTextEditor;
        if (current_file != undefined) {
            let file_name;
            let myRe = /(.+\/)*(.+)\.(.+)$/;
            let split_path = myRe.exec(current_file.document.uri.path);
            if (split_path != null) {
                console.log("End of File: " + split_path[2]);
                file_name = split_path[2];
                if (file_name.includes('spec')) {
                    file_name = file_name.replace('_spec', '');
                    let test_file_path = split_path[1] + '../src/' + file_name + '.lua';
                    console.log(test_file_path);
                    vscode.workspace.openTextDocument(test_file_path).then(doc => vscode.window.showTextDocument(doc));
                }
                else {
                    let test_file_path = split_path[1] + '../spec/' + file_name + '_spec.lua';
                    console.log(test_file_path);
                    vscode.workspace.openTextDocument(test_file_path).then(doc => vscode.window.showTextDocument(doc));
                }
            }
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
// todo
// cache file paths so we don't need to solve them again
//# sourceMappingURL=extension.js.map