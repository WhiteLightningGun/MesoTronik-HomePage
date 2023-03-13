var email = document.getElementById("email");
var ErrorBox = document.getElementById("ErrorBox");
var ErrorBox2 = document.getElementById("ErrorBox2");
var textBox = document.getElementById("textBox");

email.oninvalid = function(e) {
    if (!e.target.validity.valid)
    {
        e.preventDefault();
        ErrorBox.style.visibility = "visible";
    } 
}

email.oninput = function(e) {
    if (e.target.validity.valid)
    {
        e.preventDefault();
        ErrorBox.style.visibility = "hidden";
    } 
}

textBox.oninvalid = function(e) {
    if (!e.target.validity.valid)
    {
        e.preventDefault();
        ErrorBox2.style.visibility = "visible";
    } 
}

textBox.oninput = function(e) {
    if (e.target.validity.valid)
    {
        e.preventDefault();
        ErrorBox2.style.visibility = "hidden";
    } 
}