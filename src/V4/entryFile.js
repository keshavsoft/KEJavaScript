const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");
// const { StartFunc: StartFuncFromDomLoad } = require("./DomLoad/entryFile");
const { StartFunc: StartFuncFromDomLoaded } = require("./DomLoaded/entryFile");

const StartFunc = () => {
    StartFuncFromAddListeners();
    // StartFuncFromDomLoad();
    StartFuncFromDomLoaded();
};

module.exports = { StartFunc };