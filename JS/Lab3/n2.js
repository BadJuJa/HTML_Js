var checkboxes = document.getElementsByName('nameCheckbox');
var result = document.getElementById('rezultatCheckbox');

var chck = true;

for (var i = 0; i < checkboxes.length; i++) {
    if (i != 2) {
        checkboxes[i].checked = true;
        result.innerHTML = parseFloat(result.innerHTML) + parseFloat(checkboxes[i].value);
    }
}

function checkie(check) {
    checkboxes.forEach(e => e.checked = false);
    result.innerHTML = 0.00;
    start = check ? 1 : 0;
    for (var i = start; i < checkboxes.length; i += 2) {
        checkboxes[i].checked = true;
        result.innerHTML = parseFloat(result.innerHTML) + parseFloat(checkboxes[i].value);
    }
    chck = !chck;
    setTimeout(checkie, 2000, chck);
}

setTimeout(checkie, 2000, chck);