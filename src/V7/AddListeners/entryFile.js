const { StartFunc: StartFromEmpty } = require("./Empty/entryFile");
const { StartFunc: StartFromHtmlId } = require("./HtmlId/entryFile");
const { StartFunc: StartFromFromHtmlClass } = require("./HtmlClass/entryFile");

const StartFunc = () => {
    StartFromEmpty();
    StartFromHtmlId();
    StartFromFromHtmlClass();
};

module.exports = { StartFunc };
