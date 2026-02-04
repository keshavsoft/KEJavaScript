const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "AddCode.FromScratchHtml";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = LocalFuncGetActiveFolder();
        const LocalFileName = LocalFuncGetActiveEditor();
        const LocalNewPath = `${LocalToPath}/Js/${LocalFileName}`;

        fse.copySync(LocalFromPath, LocalNewPath);
        LocalFuncFileAsArray();

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
        // const filePath = `${LocalToPath}/app.js`;
        StartFuncFromOpenApp({ inToPath: LocalNewPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncReadAsLines = ({ inFilePath }) => {
    try {
        const allFileContents = fse.readFileSync(inFilePath, 'utf-8');
        const LocalArray = allFileContents.split(/\r?\n/);

        return LocalArray;
    } catch (err) {
        console.error(err);
    };
};

const LocalFuncGetActiveFolder = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const activeFileFolderPath = require('path').dirname(activeFilePath);
        // const parsedPath = path.parse(activeFilePath);

        if (fse.pathExistsSync(activeFileFolderPath)) {
            return activeFileFolderPath;
        };
    };

    // If no folder or active file is found, return null
    return null;
};

const LocalFuncGetActiveEditor = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const parsedPath = path.parse(activeFilePath);

        return parsedPath.name;
    };

    // If no folder or active file is found, return null
    return null;
};

const LocalFuncFileAsArray = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const fileNameOnly = path.parse(activeFilePath).name;
        const LocalFileAsLlines = LocalFuncReadAsLines({ inFilePath: activeFilePath });

        const index = LocalFileAsLlines.findIndex(fruit => fruit === "</body>");

        if (index !== -1) {
            // 2. Insert the new value at the found index + 1
            // splice(startIndex, deleteCount, item1, item2, ...)
            LocalFileAsLlines.splice(index, 0, "");
            LocalFileAsLlines.splice(index, 0, `\t<script src="./Js/${fileNameOnly}/entryFile.js" type="module"></script>`);
            LocalFileAsLlines.splice(index, 0, "");
        };

        const fileContent = LocalFileAsLlines.join('\n');

        fse.writeFileSync(activeFilePath, fileContent, 'utf8');
    };

    // If no folder or active file is found, return null
    return null;
};

module.exports = { StartFunc };