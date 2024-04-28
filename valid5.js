//Validation Code For Inputs

var password = document.forms['form']['password'];

var pass_error = document.getElementById('pass_error');

password.addEventListener('input', pass_Verify);

function validated() {
    if (password.value !== "AJANTACAVES") {
        pass_error.style.display = "block";
        password.focus();
        return false;
    } else {
        pass_error.style.display = "none";
        window.location.href = "fifth.html";
        return false; // Prevents form submission
    }
}

function pass_Verify() {
    if (password.value.length > 0) {
        pass_error.style.display = "none";
        return true;
    }
}
