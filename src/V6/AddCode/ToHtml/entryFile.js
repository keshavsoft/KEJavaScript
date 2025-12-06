const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const CommonRegisterCommand = "AddCode.ToHtml";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncFromClipboard = async () => {
    // Try to get the currently selected folder in Explorer
    await vscode.commands.executeCommand('copyFilePath');
    const clipboardText = await LocalFuncGetActiveEditor();

    if (clipboardText && (await fse.pathExists(clipboardText)) && (await fse.lstat(clipboardText)).isDirectory()) {
        return clipboardText;
    };

    return null;
};

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return the original value if it's not a string or is empty
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const LocalFuncToActivate = async () => {
    try {
        const fileNameWithoutExt = LocalFuncGetActiveFileNameOnly();
        const LocalAddJs = `${fileNameWithoutExt}/Js`;
        const LocalFromPath = path.join(__dirname, "copyCode");

        fs.mkdirSync(LocalAddJs, { recursive: true });
        fs.cpSync(LocalFromPath, LocalAddJs, { recursive: true });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${fileNameWithoutExt}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncGetActiveFileNameOnly = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const fileNameWithoutExt = path.basename(activeFilePath, '.html');
        const activeFileFolderPath = path.dirname(activeFilePath);

        return `${activeFileFolderPath}/${capitalizeFirstLetter(fileNameWithoutExt)}`;
        // const activeFileFolderPath = require('path').dirname(activeFilePath);

        // if (await fse.pathExists(activeFileFolderPath)) {
        //     return activeFileFolderPath;
        // };
    };

    // If no folder or active file is found, return null
    return null;
};

module.exports = { StartFunc };