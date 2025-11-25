const { StartFunc: StartFromAfterFetch } = require("./AfterFetch/entryFile");
const { StartFunc: StartFuncFromScratch } = require("./FromScratch/entryFile");
const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");

const StartFunc = () => {
    StartFromAfterFetch();
    StartFuncFromScratch();
    StartFuncFromAddListeners();
};

module.exports = { StartFunc };
