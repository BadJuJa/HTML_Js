var z = document.querySelector("p");

function fan() {
    var a = String.fromCharCode(event.keyCode || event.charCode);
    z.innerHTML += a;
}