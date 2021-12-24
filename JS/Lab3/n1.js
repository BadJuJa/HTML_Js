var checkboxes = document.getElementsByName('nameCheckbox');
var result = document.getElementById('rezultatCheckbox');

for (var i = 0; i < checkboxes.length; i++) {
    if (i != 2) {
        checkboxes[i].checked = true;
        result.innerHTML = parseFloat(result.innerHTML) + parseFloat(checkboxes[i].value);
    }
}