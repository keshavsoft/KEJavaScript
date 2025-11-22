const { StartFunc: StartFromAfterFetch } = require("./AfterFetch/entryFile");
const { StartFunc: StartFuncFromScratch } = require("./FromScratch/entryFile");

const StartFunc = () => {
    StartFromAfterFetch();
    StartFuncFromScratch();
};

module.exports = { StartFunc };
