var table = Array(10);
for (i = 0; i < 10; i++) {
    table[i] = Array(10);
}
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        table[i][j] = i * j;
    }
}

function tabumn(table) {
    var result = '<table>';
    for (var i = 0; i < 10; i++) {
        result += "<tr>";
        for (var j = 0; j < 10; j++) {
            result += "<td>" + table[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>"
    return result;
}

document.write(tabumn(table));