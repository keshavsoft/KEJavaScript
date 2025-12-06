const { StartFunc: StartFuncFromColumnsFromHtml } = require("./ColumnsFromHtml/entryFile");
const { StartFunc: StartFuncFromColumnsFromJson } = require("./ColumnsFromJson/entryFile");
const { StartFunc: StartFuncFromAuthentication } = require("./Authentication/entryFile");

const StartFunc = () => {
    StartFuncFromColumnsFromHtml();
    StartFuncFromColumnsFromJson();
    StartFuncFromAuthentication();
};

module.exports = { StartFunc };
