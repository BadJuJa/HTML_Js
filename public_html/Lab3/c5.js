var out = document.querySelector("output");
var k1 = document.querySelector("h1");

function fol() {
    out.innerHTML = event.clientX + " | " + event.clientY;
}

function clicks() {
    var k = event.which;
    switch (k) {
        case 1:
            k1.innerHTML = "Вы нажали левую кнопку мыши";
            break;
        case 2:
            k1.innerHTML = "Вы нажали колесико";
            break;
        case 3:
            k1.innerHTML = "Вы нажали правую кнопку мыши";
            break;
    }
}