const { StartFunc: StartFromShow } = require("./Show/entryFile");
const { StartFunc: StartCreate } = require("./Create/entryFile");
const { StartFunc: StartUpdate } = require("./Update/entryFile");
const { StartFunc: StartAlter } = require("./Alter/entryFile");
const { StartFunc: StartDelete } = require("./Delete/entryFile");

const StartFunc = () => {
    StartFromShow();
    StartCreate();
    StartUpdate();
    StartAlter();
    StartDelete();
};

module.exports = { StartFunc };
