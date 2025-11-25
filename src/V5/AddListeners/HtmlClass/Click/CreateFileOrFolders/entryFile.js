const fse = require('fs-extra');

const { StartFunc: StartFuncCreateHtmlIdFolder } = require("./CreateHtmlClassFolder/entryFile");
const { StartFunc: StartFuncToActiveEditor } = require("./ToActiveEditor/entryFile");

const StartFunc = async ({ inActiveEditorPath, inHtmlClassNeeded }) => {
    const LocalFromActiveEditor = await StartFuncToActiveEditor({ inActiveEditorPath, inHtmlClassNeeded });

    if (LocalFromActiveEditor === false) {

    } else {
        const activeFileFolderPath = require('path').dirname(inActiveEditorPath);

        if (await fse.pathExists(activeFileFolderPath)) {
            await StartFuncCreateHtmlIdFolder({ inCreatePath: activeFileFolderPath, inHtmlClassNeeded });
        };
    };
};

module.exports = { StartFunc };
