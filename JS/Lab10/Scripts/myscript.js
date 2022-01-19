function validateComments(a, b) {
    if (a.value != b.value) {
        a.setCustomValidity("Пароли должны совпадать!");
    } else {
        a.setCustomValidity("");
    }
}