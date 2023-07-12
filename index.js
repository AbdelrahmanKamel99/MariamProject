

function check(form) {
    form = document.getElementById("form")
    if (form.username.value == "admin" && form.password.value == "admin" && form.confpassword.value == form.password.value) {
        form.action = "cv.html";
    } else if (form.confpassword.value != form.password.value) {
        alert("The passwords specified must be identical")
    } else if (form.username.value == "") {
        alert("username can not be empty")
    } else if (form.password.value == "") {
        alert("password can not be empty")
    }
    else if (form.password.value.length <= 8) {
        alert("password can not be less than 8 characters")

    }

    else {
        alert("Incorrect Password or Username")
        return false;
    }
}

