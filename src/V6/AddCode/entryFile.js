const { StartFunc: StartFromAfterFetch } = require("./AfterFetch/entryFile");
const { StartFunc: StartFuncFromScratch } = require("./FromScratch/entryFile");
const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromFetchAsGet } = require("./FetchAsGet/entryFile");
const { StartFunc: StartFuncFromToHtml } = require("./ToHtml/entryFile");
const { StartFunc: StartFromForDelete } = require("./ForDelete/entryFile");

const StartFunc = () => {
    StartFromAfterFetch();
    StartFuncFromScratch();
    StartFuncFromAddListeners();
    StartFuncFromFetchAsGet();
    StartFuncFromToHtml();
    StartFromForDelete();
};

module.exports = { StartFunc };