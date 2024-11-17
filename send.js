function sendMail() {
    var parms = {
        explanation : document.getElementById("explanation").value
    }
    emailjs.send("service_93v0exs", "template_du8te5o",parms).then(alert("Response has been submitted"))
}