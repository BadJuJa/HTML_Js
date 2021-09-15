function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}

var square = function(x) { return x * x; }

var f = function fact(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
};

var tenSquared = (function(x) { return x * x; }(10));
document.write(distance(1, 1, 5, 5), " ", factorial(5), " ", square(4), " ", f(5), tenSquared);