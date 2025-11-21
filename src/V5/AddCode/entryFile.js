const { StartFunc: StartFromAfterFetch } = require("./AfterFetch/entryFile");

const StartFunc = () => {
    StartFromAfterFetch();
};

module.exports = { StartFunc };
