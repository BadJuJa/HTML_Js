var arr = Array(5);
for (var i = 0; i < arr.length; i++) {
  var n = Math.floor(Math.random() * (15 - 2) + 2);
  arr[i] = Array(n);
}

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    arr[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}

for (var i = 0; i < arr.length; i++)
  for (var k = 0; k < arr[i].length - 1; k++) {
    var wasSwap = false;

    for (var j = 0; j < arr[i].length - 1 - k; j++)
      if (arr[i][j + 1] > arr[i][j]) {
        var swap = arr[i][j];
        arr[i][j] = arr[i][j + 1];
        arr[i][j + 1] = swap;

        wasSwap = true;
      }

    if (!wasSwap) break;
  }
