import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/entryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncShowOnDom } from "./showOnDom.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    StartFuncShowOnDom();

};

export { StartFunc };
