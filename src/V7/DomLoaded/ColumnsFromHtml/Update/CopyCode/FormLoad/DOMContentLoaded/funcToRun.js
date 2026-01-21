import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as GetFetchRowData } from "./GetFetchRowData/Entry.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    GetFetchRowData();
};

export { StartFunc };
