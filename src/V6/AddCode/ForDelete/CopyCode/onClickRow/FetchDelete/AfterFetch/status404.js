let StartFunc = ({ inResponse }) => {
    Swal.fire({
        title: "not Deleted!",
        text: `The delete end point not found`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
    });
};

export { StartFunc };