const fs = require('fs');

const importLine = `import { StartFunc as StartFuncFrom$FolderName } from "./$FolderName/entryFile.js";`;
const useLine = `\tStartFuncFrom$FolderName();`;

const StartFunc = ({ inFilePath, inFolderName }) => {
    const LocalFolderName = inFolderName;

    const content = fs.readFileSync(inFilePath, 'utf-8');
    const LocalLines = content.split('\n');

    LocalFuncForImport({
        inLines: LocalLines,
        inFolderName: LocalFolderName
    });
    
    LocalFuncForUse({
        inLines: LocalLines,
        inFolderName: LocalFolderName
    });

    fs.writeFileSync(inFilePath, LocalLines.join('\n'), 'utf-8');
};

const LocalFuncForImport = ({ inLines, inFolderName }) => {
    const LocalLines = inLines;
    const LocalImportLine = importLine.replaceAll("$FolderName", inFolderName);

    const alreadyImported = LocalLines.some(line => line.trim() === LocalImportLine);

    if (!alreadyImported) {
        const lastImportIndex = LocalLines.reduce((acc, line, i) =>
            line.startsWith('import') ? i : acc, -1);
        LocalLines.splice(lastImportIndex + 1, 0, LocalImportLine);
    };
};

const LocalFuncForUse = ({ inLines, inFolderName }) => {
    const LocalLines = inLines;
    const LocalUseLine = useLine.replace("$FolderName", inFolderName);

    const alreadyUsed = LocalLines.some(line => line.trim() === LocalUseLine);

    if (!alreadyUsed) {
        const lastUseIndex = LocalLines.reduce((acc, line, i) =>
            line.trim().startsWith('};') ? i : acc, -1);
        LocalLines.splice(lastUseIndex, 0, LocalUseLine);
    };
};

module.exports = { StartFunc };
