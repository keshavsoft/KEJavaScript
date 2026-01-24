let StartFunc = () => {
    // Get the first <tfoot> element
    let tfoot = document.getElementsByTagName("tfoot")[0];

    // Find required inputs inside tfoot
    let requiredInputs = tfoot.querySelectorAll("input[required], select[required], textarea[required]");

    let isValid = true;

    for (let input of requiredInputs) {
        if (!input.value.trim()) {
            input.classList.add("is-invalid");   // Bootstrap invalid
            input.classList.remove("is-valid");
            isValid = false;
        } else {
            input.classList.add("is-valid");     // Bootstrap valid
            input.classList.remove("is-invalid");
        }
    }

    return isValid;  // true if all required fields filled
};

export { StartFunc };
