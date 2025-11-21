const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "DomLoaded.ColumnsFromJson.Delete";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const userInputFolderName = await vscode.window.showInputBox({
            prompt: 'Enter the folder name',
            placeHolder: 'Enter Folder Name'
        });

        if (!userInputFolderName) throw new Error("Folder name not provided.");
        const sanitizedFolderName = userInputFolderName.trim().replace(/[<>:"/\\|?*]+/g, "_");

        const showEndpoint = await vscode.window.showInputBox({
            prompt: 'Enter the Show endpoint',
            placeHolder: '/api/show-path'
        });

        if (!showEndpoint) throw new Error("Show endpoint not provided.");

        const deleteEndpoint = await vscode.window.showInputBox({
            prompt: 'Enter the Delete endpoint',
            placeHolder: '/api/delete-path'
        });

        if (!deleteEndpoint) throw new Error("Delete endpoint not provided.");

        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncForCopyFilePath();

        if (!LocalToPath) {
            vscode.window.showErrorMessage("No valid folder selected. Please copy a folder path to the clipboard (Right-click → Copy Path).");
            return;
        }

        const FinalDestinationPath = path.join(LocalToPath, sanitizedFolderName);

        await fse.copy(LocalFromPath, FinalDestinationPath);

        const configPath = path.join(FinalDestinationPath, "config.json");
        
        await fse.writeJson(configPath, {
            GetEndPoint: showEndpoint,
            DeleteUrl: deleteEndpoint
        });

        vscode.window.showInformationMessage(`Boilerplate code copied to: ${FinalDestinationPath}`);
        StartFuncFromOpenApp({ inToPath: LocalToPath });

    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
};

const LocalFuncForCopyFilePath = async () => {
    await vscode.commands.executeCommand('copyFilePath');
    const clipboardText = await vscode.env.clipboard.readText();

    if (
        clipboardText &&
        (await fse.pathExists(clipboardText)) &&
        (await fse.lstat(clipboardText)).isDirectory()
    ) {
        return clipboardText;
    }

    return null;
};

module.exports = { StartFunc };
