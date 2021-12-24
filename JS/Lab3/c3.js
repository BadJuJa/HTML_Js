var a = document.getElementsByTagName("input");
var k = document.querySelector("textarea");

function flag() {
    k.innerHTML = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked == 1) {
            k.innerHTML += "Флажок № " + (i + 1) + "\n";
        }
    }
}