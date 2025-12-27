let StartFunc = ({ inResponseAsJson }) => {
    console.log("---", inResponseAsJson);

    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();
    jFLocal({ inResponseAsJson });
};

const jFLocal = ({ inResponseAsJson }) => {
    Swal.fire({
        title: "sucess",
        text: `${inResponseAsJson}`,
        icon: "success",
        draggable: true
    });
};


export { StartFunc }