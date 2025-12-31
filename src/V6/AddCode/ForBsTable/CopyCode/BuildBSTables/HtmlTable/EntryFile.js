const StartFunc = () => {
    var $table = $('#table');

    let LocalConfig = {};
    LocalConfig.onPostBody = "";
    LocalConfig.onClickRow = "";
    $table.bootstrapTable(LocalConfig);
};

export { StartFunc };
