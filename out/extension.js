"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "test-file-keybinding-extension" is now active!');
    let disposable = vscode.commands.registerCommand('test-file-keybinding-extension.toggleTestFile', () => {
        console.log("TEST TOGGLE CALLED");
        let current_file = vscode.window.activeTextEditor;
        if (current_file != undefined) {
            if (current_file.document.uri.path.includes('spec')) {
                let prefix_path = current_file.document.uri.path.split('spec/')[0];
                let file_path = current_file.document.uri.path.split('spec/')[1].split('_spec.lua')[0];
                console.log(file_path);
                let test_file_path = prefix_path + 'src/' + file_path + '.lua';
                console.log(test_file_path);
                vscode.workspace.openTextDocument(test_file_path).then(doc => vscode.window.showTextDocument(doc));
            }
            else {
                let prefix_path = current_file.document.uri.path.split('src/')[0];
                let file_path = current_file.document.uri.path.split('src/')[1].split('.lua')[0];
                console.log(file_path);
                let test_file_path = prefix_path + 'spec/' + file_path + '_spec.lua';
                console.log(test_file_path);
                vscode.workspace.openTextDocument(test_file_path).then(doc => vscode.window.showTextDocument(doc));
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
//requirements
//src and spec folder are at same level in directory
//test files have _spec as a suffix
//test files are the same name as their module they are testing
//# sourceMappingURL=extension.js.map