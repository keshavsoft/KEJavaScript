const { StartFunc: StartFromEmpty } = require("./Empty/entryFile");
const { StartFunc: StartFromHtmlId } = require("./HtmlId/entryFile");

const StartFunc = () => {
    StartFromEmpty();
    StartFromHtmlId();
};

module.exports = { StartFunc };
