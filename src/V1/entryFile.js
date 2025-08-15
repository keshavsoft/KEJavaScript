const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");

const StartFunc = () => {
    StartFuncFromAddListeners();
};

module.exports = { StartFunc };