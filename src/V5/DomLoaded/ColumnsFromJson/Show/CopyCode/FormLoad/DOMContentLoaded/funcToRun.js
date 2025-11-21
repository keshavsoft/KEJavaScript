import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/entryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as StartFuncshowOnDom } from "./showOnDom.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    StartFuncshowOnDom();
};

export { StartFunc };
