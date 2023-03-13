var email = document.getElementById("email");
var errorBox = document.getElementById("ErrorBox");

email.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid)
    {
        e.target.setCustomValidity("Please input valid email address");
    } 

    errorBox.innerHTML = "Please input valid email address";


}