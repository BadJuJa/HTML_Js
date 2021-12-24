function Properties(obj) {
    var result = "<table>";
    for (key in obj) {
        result += "<tr><td>" + key + "</td><td>" + obj[key] + "</td></tr>";
    }
    result += "</table>";
    return result;
}

document.write(Properties(navigator));