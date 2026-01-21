const vscode = require('vscode');

const { StartFunc: StartFuncCreateFileOrFolders } = require("./CreateFileOrFolders/entryFile");
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const CommonRegisterCommand = "AddListeners.HtmlClass.Click";

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalActiveEditorPath = LocalFuncGetActiveEditor();

        if (!LocalActiveEditorPath) throw new Error('No active file found in the workspace.');

        const LocalHtmlClassNeeded = await vscode.window.showInputBox({ prompt: 'Enter the HtmlClass' });

        if (!LocalHtmlClassNeeded) throw new Error('HtmlId was not provided.');
        if (LocalHtmlClassNeeded.length > 20) throw new Error('HtmlId should be less than 20 characters.');

        StartFuncCreateFileOrFolders({
            inActiveEditorPath: LocalActiveEditorPath,
            inHtmlClassNeeded: LocalHtmlClassNeeded
        });

        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncGetActiveEditor = () => {
    // If no folder is selected, fall back to the active file's folder
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;

        return activeFilePath;
    };

    // If no folder or active file is found, return null
    return null;
};

module.exports = { StartFunc };
