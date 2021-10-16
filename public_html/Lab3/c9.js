function calculate() {
    var radius = document.getElementById("textMeaning").value;
    var circle = {
        square: function() {
            return Math.PI * Math.pow(radius, 2);
        },
        length: function() {
            return Math.PI * 2 * radius;
        },
    };
    document.getElementById("result").innerHTML =
        "Длина: " + circle.length() + "<br>" + "Площадь: " + circle.square();
}