const { StartFunc: StartFuncFromFetchFormGet } = require("./FetchFormPost/entryFile");

const StartFunc = () => {
    StartFuncFromFetchFormGet();
};

module.exports = { StartFunc };