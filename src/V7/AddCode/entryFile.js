const { StartFunc: StartFromAfterFetch } = require("./AfterFetch/entryFile");
const { StartFunc: StartFuncFromScratch } = require("./FromScratch/entryFile");
const { StartFunc: StartFuncFromAddListeners } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromFetchAsGet } = require("./FetchAsGet/entryFile");
const { StartFunc: StartFuncFromToHtml } = require("./ToHtml/entryFile");
const { StartFunc: StartFromForBsTableDelete } = require("./ForBsTableDelete/entryFile");
const { StartFunc: StartFromForBsTableAlter } = require("./ForBsTableAlter/entryFile");
const { StartFunc: StartFromForBsTableCreate } = require("./ForBsTableCreate/entryFile");
const { StartFunc: StartFromForBsTable } = require("./ForBsTable/entryFile");
const { StartFunc: StartFromForBsTableCreateWithDL } = require("./ForBsTableCreateWithDL/entryFile");
const { StartFunc: StartFuncFromFromScratchHtml } = require("./FromScratchHtml/entryFile");

const StartFunc = () => {
    StartFromAfterFetch();
    StartFuncFromScratch();
    StartFuncFromAddListeners();
    StartFuncFromFetchAsGet();
    StartFuncFromToHtml();
    StartFromForBsTableDelete();
    StartFromForBsTableAlter();
    StartFromForBsTableCreate();
    StartFromForBsTable();
    StartFromForBsTableCreateWithDL();
    StartFuncFromFromScratchHtml();
};

module.exports = { StartFunc };