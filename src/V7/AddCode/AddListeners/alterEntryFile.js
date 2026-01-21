const fs = require('fs');

const StartFunc = ({ inFilePath }) => {
    const content = fs.readFileSync(inFilePath, 'utf-8');
    const LocalLines = content.split('\n');

    LocalFuncForImport({ inLines: LocalLines });
    LocalFuncForUse({ inLines: LocalLines });

    fs.writeFileSync(inFilePath, LocalLines.join('\n'), 'utf-8');
};

const LocalFuncForImport = ({ inLines }) => {
    const LocalLines = inLines;

    const importLine = `import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";`

    const alreadyImported = LocalLines.some(line => line.trim() === importLine);

    if (!alreadyImported) {
        const lastImportIndex = LocalLines.reduce((acc, line, i) =>
            line.startsWith('import') ? i : acc, -1);
        LocalLines.splice(lastImportIndex + 1, 0, importLine);
    };
};

const LocalFuncForUse = ({ inLines }) => {
    const LocalLines = inLines;

    const useLine = `\tStartFuncFormAddListeners();`;

    const alreadyUsed = LocalLines.some(line => line.trim() === useLine);

    if (!alreadyUsed) {
        const lastUseIndex = LocalLines.reduce((acc, line, i) =>
            line.trim().startsWith('};') ? i : acc, -1);
        LocalLines.splice(lastUseIndex, 0, useLine);
    };
};

module.exports = { StartFunc };
