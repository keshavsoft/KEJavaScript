let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalHtmlDLEId = document.getElementById('HtmlDLId-AccountName');
    console.log("aaaaaaaaaaa : ", inResponseAsJson,jVarLocalHtmlDLEId);

    inResponseAsJson.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        jVarLocalHtmlDLEId.appendChild(option);
    });
};

export { StartFunc };