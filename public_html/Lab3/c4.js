function shake(e, distance, time) {
    if (typeof e === "string") e = document.getElementByld(e);
    if (!time) time = 500;
    if (!distance) distance = 5;
    var originalStyle = e.style.cssText;
    e.style.position = "relative";
    var start = new Date().getTime();

    animate();

    function animate() {
        var now = new Date().getTime();
        var elapsed = now - start;
        var fraction = elapsed / time;
        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";

            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            e.style.cssText = originalStyle;
        }
    }
}

var p = document.getElementsByName("per");
var tex = document.querySelector("h3");
var pol = document.querySelector("input[type=text]");

function prove() {
    for (var i = 0; i < p.length; i++) {
        if ((p[i].checked == true) & (pol.value != "")) {
            tex.innerHTML = "Выбран переключатель №" + (i + 1);
        } else {
            shake(pol);
        }
    }
}