const { StartFunc: StartFromSignIn } = require("./SignIn/entryFile");

const StartFunc = () => {
    StartFromSignIn();
};

module.exports = { StartFunc };
