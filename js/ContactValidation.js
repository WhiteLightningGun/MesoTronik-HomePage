var email = document.getElementById("email");

email.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid)
    {
        e.target.setCustomValidity("Hey, fix the email first!!!");
    } 
}