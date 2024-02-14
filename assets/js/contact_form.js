function sendForm(){
    document.getElementById("form-redirect").value = "http://"+window.location.host;
    alert("Your message has been sent correctly");
}
function hcaptchaCallback() {
    document.getElementById("btn-form").removeAttribute("disabled");
}
