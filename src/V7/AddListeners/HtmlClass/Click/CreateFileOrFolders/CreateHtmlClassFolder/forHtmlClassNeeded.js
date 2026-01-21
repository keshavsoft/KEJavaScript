const vscode = require('vscode');
const fs = require('fs');

const StartFunc = async ({ inCreatePath, inHtmlClassNeeded }) => {
    const LocalToCreatePath = inCreatePath;
    const LocalHtmlClassNeeded = inHtmlClassNeeded;
    const LocalPathNeeded = `${LocalToCreatePath}/${LocalHtmlClassNeeded}`;

    try {
        fs.accessSync(LocalPathNeeded, fs.constants.F_OK);

        vscode.window.showInformationMessage(`${LocalPathNeeded} folder is already present!`);
    } catch (err) {
        await fs.mkdirSync(LocalPathNeeded);

        await LocalFuncForButtonClickFile({
            inCreatePath: LocalToCreatePath,
            inHtmlClassNeeded: LocalHtmlClassNeeded
        });

        await LocalFuncForEntryFile({
            inCreatePath: LocalToCreatePath,
            inHtmlClassNeeded: LocalHtmlClassNeeded
        });
    };
};

const LocalFuncForButtonClickFile = async ({ inCreatePath, inHtmlClassNeeded }) => {
    const LocalToCreatePath = inCreatePath;

    const LocalContentToInsert = [
        "let StartFunc = () => {",
        "};",
        "",
        "export { StartFunc };"
    ];

    await fs.writeFileSync(`${LocalToCreatePath}/${inHtmlClassNeeded}/ButtonClickFunc.js`, LocalContentToInsert.join('\n'));
};

const LocalFuncForEntryFile = async ({ inCreatePath, inHtmlClassNeeded }) => {
    const LocalToCreatePath = inCreatePath;

    const LocalContentToInsert = [
        "import { StartFunc as StartFuncButtonClickFunc } from './ButtonClickFunc.js';",
        "",
        "let StartFunc = () => {",
        `\tlet elements = document.getElementsByClassName('${inHtmlClassNeeded}');`,
        "\t",
        "\tfor (const element of elements) {",
        "\t\telement.addEventListener('click', StartFuncButtonClickFunc);",
        "\t};",
        "};",
        "",
        "export { StartFunc };"
    ];

    await fs.writeFileSync(`${LocalToCreatePath}/${inHtmlClassNeeded}/entryFile.js`, LocalContentToInsert.join('\n'));
};

module.exports = { StartFunc };
