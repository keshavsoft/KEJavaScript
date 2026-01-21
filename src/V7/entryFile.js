const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");
// const { StartFunc: StartFuncFromDomLoad } = require("./DomLoad/entryFile");
const { StartFunc: StartFuncFromDomLoaded } = require("./DomLoaded/entryFile");
const { StartFunc: StartFuncFromAddCode } = require("./AddCode/entryFile");
const { StartFunc: StartFuncFromAddPartial } = require("./AddPartial/entryFile");

const StartFunc = () => {
    StartFuncFromAddListeners();
    // StartFuncFromDomLoad();
    StartFuncFromDomLoaded();
    StartFuncFromAddCode();
    StartFuncFromAddPartial();
};

module.exports = { StartFunc };