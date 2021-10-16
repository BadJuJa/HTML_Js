var k = document.querySelector("h1");

k.onmouseover = function() {
    k.style.textDecoration = "underline";
};
k.onmouseout = function() {
    k.style.textDecoration = "none";
};