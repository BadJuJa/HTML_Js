function _12(a) {
  if (a > 0) {
    console.log(a, "Верно");
  } else {
    console.log(a, "Неверно");
  }
}

function _34() {
  var st = Math.pow(2, 10);
  console.log(st);
}

function _44() {
  let str = "js";
  str = str.toLowerCase();
  console.log(str);
}

_12(-1);
_12(-0);
_12(1);
_34();
_44();
