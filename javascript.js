function setAction(form) {
    alert("Registeration Completed");
    return false;
}

function checkForm(form) {
    if (form.password1.value == "") {
        alert("Error: password cannot be blank!");
        form.password.focus();
        return false;
    }
}

