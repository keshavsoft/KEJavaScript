const fse = require('fs-extra');

const CommonImportSearch = "import {";
const CommonCloseOfStartFunc = "};";

const { StartFunc: StartFuncFromImportLine } = require("./importLine");

const StartFunc = ({ inLinesArray, inAlterPath, inHtmlClassNeeded }) => {
    try {
        let LocalLines = inLinesArray;
        const LocalHtmlIdNeeded = inHtmlClassNeeded;
        const LocalAlterPath = inAlterPath;
        const LocalFromImport = StartFuncFromImportLine({ inLinesArray: LocalLines, inHtmlClassNeeded: LocalHtmlIdNeeded });

        if (LocalFromImport) {
            return false;
        };

        LocalFuncToImport({ inLinesArray: LocalLines, inHtmlClassNeeded: LocalHtmlIdNeeded });
        LocalFuncToStartFunc({ inLinesArray: LocalLines, inHtmlClassNeeded: LocalHtmlIdNeeded });
        LocalFuncWriteFile({ inLinesArray: LocalLines, inAlterPath: LocalAlterPath });

    } catch (error) {
        return error.message;
    };
};

const LocalFuncWriteFile = ({ inLinesArray, inAlterPath }) => {
    let LocalLines = inLinesArray;
    const LocalAlterPath = inAlterPath;

    const content = LocalLines.join('\n');

    fse.writeFileSync(LocalAlterPath, content, 'utf-8');
};

const LocalFuncToImport = ({ inLinesArray, inHtmlClassNeeded }) => {
    try {
        let LocalLines = inLinesArray;
        const LocalHtmlIdNeeded = inHtmlClassNeeded;
        const LocalToInsertLine = `import { StartFunc as StartFuncFrom${LocalHtmlIdNeeded} } from './${LocalHtmlIdNeeded}/EntryFile.js';`;

        let LocalFindIndex = LocalLines.findLastIndex((element) => element.startsWith(CommonImportSearch));

        if (LocalFindIndex === -1) {
            LocalLines.splice(0, 0, LocalToInsertLine);
            LocalLines.splice(1, 0, "");
        } else {
            LocalLines.splice(LocalFindIndex + 1, 0, LocalToInsertLine);
        };
    } catch (error) {
        return error.message;
    };
};

const LocalFuncToStartFunc = ({ inLinesArray, inHtmlClassNeeded }) => {
    try {
        let LocalLines = inLinesArray;
        const LocalHtmlIdNeeded = inHtmlClassNeeded;
        const LocalToInsertLine = `\tStartFuncFrom${LocalHtmlIdNeeded}();`;

        let LocalFindIndex = LocalLines.findLastIndex((element) => element === CommonCloseOfStartFunc);

        LocalLines.splice(LocalFindIndex, 0, LocalToInsertLine);
        // LocalLines.splice(LocalFindIndex, 0, LocalToInsertLine);
    } catch (error) {
        return error.message;
    };
};

module.exports = { StartFunc };
