const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromDomLoad } = require("./DomLoad/entryFile");

const StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromDomLoad();
};

module.exports = { StartFunc };