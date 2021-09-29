f1x(-7, 7);
function f1x(a, b) {
  var i, a, b, rez;
  for (i = a; i <= b; ) {
    rez = i * i;
    i = i + 0.2;
    document.write(rez + "<br>");
  }
}
