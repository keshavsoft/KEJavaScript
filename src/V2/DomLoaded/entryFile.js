const { StartFunc: StartFuncFromColumnsFromHtml } = require("./ColumnsFromHtml/entryFile");
const { StartFunc: StartFuncFromColumnsFromJson } = require("./ColumnsFromJson/entryFile");

const StartFunc = () => {
    StartFuncFromColumnsFromHtml();
    StartFuncFromColumnsFromJson();
};

module.exports = { StartFunc };
