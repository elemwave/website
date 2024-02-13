function sendForm(){
    document.getElementById("form-redirect").value = "http://"+window.location.host;
    document.getElementById("form-subject").value = "ElemWave - " + document.getElementById("form-name").value;
    alert("Your message has been sent correctly");
}
function hcaptchaCallback() {
    document.getElementById("btn-form").removeAttribute("disabled");
}
