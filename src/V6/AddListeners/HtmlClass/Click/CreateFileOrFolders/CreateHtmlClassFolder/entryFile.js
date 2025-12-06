const { StartFunc: StartFuncForHtmlIdNeeded } = require("./forHtmlClassNeeded");

const StartFunc = async ({ inCreatePath, inHtmlClassNeeded }) => {
    const LocalToCreatePath = inCreatePath;
    const LocalHtmlIdNeeded = inHtmlClassNeeded;

    await StartFuncForHtmlIdNeeded({
        inCreatePath: LocalToCreatePath,
        inHtmlClassNeeded: LocalHtmlIdNeeded
    });
};

module.exports = { StartFunc };
