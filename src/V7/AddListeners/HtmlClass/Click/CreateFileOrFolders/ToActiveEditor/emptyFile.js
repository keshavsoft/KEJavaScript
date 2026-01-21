const fs = require('fs');

const StartFunc = async ({ inCreatePath, inHtmlClassNeeded }) => {
    const LocalToCreatePath = inCreatePath;

    const LocalContentToInsert = [
        `import { StartFunc as StartFuncFrom${inHtmlClassNeeded} } from './${inHtmlClassNeeded}/EntryFile.js';`,
        "",
        "const StartFunc = () => {",
        `\tStartFuncFrom${inHtmlClassNeeded}();`,
        "};",
        "",
        "export { StartFunc };"
    ];

    await fs.writeFileSync(LocalToCreatePath, LocalContentToInsert.join('\n'));
};

module.exports = { StartFunc };