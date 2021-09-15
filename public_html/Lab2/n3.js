var point1 = { x: 10, y: 5, z: 12 };
var point2 = { x: 6, y: 13, z: 25 };

function distance(a, b) {
    var result = 0;
    for (n in a) {
        result += a[n] * b[n];
    }
    return Math.sqrt(result);
}

document.write(distance(point1, point2));