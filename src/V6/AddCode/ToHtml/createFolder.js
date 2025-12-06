const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const CommonRegisterCommand = "AddCode.ToHtml";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = ({ inFileNameOnly }) => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

module.exports = { StartFunc };