const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "AddPartial.FetchFormPost";
const CommonFolderName = "FetchFormPost";

const { StartFunc: StartFuncFromAlterEntryFile } = require("./alterEntryFile");
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncGetActiveEditor = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        return activeFilePath;
    };

    // If no folder or active file is found, return null
    return null;
};

const LocalFuncGetActiveEditorPath = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const activeFileFolderPath = require('path').dirname(activeFilePath);

        if (fse.existsSync(activeFileFolderPath)) {
            return activeFileFolderPath;
        };
    };

    // If no folder or active file is found, return null
    return null;
};

const LocalFuncToActivate = () => {
    try {
        // const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = LocalFuncGetActiveEditorPath();
        const LocalOpenFilePath = LocalFuncGetActiveEditor();

        if (fse.existsSync(LocalOpenFilePath)) {
            LocalFuncIfFound();

            StartFuncFromAlterEntryFile({
                inFilePath: LocalOpenFilePath,
                inFolderName: CommonFolderName
            });
        } else {
            LocalFuncIfNotFound();
        };

        // fse.copySync(LocalFromPath, LocalToPath);

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
        // const filePath = `${LocalToPath}/app.js`;

        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncIfNotFound = () => {
    const LocalFromPath = path.join(__dirname, "copyCode");
    const LocalToPath = LocalFuncGetActiveEditorPath();

    fse.copySync(LocalFromPath, LocalToPath);
};

const LocalFuncIfFound = () => {
    const LocalFromPath = path.join(__dirname, "copyCode", CommonFolderName);
    const LocalToPath = LocalFuncGetActiveEditorPath();

    fse.copySync(LocalFromPath, path.join(LocalToPath, CommonFolderName));
};

module.exports = { StartFunc };