function doWhileFact(number) {
    if (number < 0) {
        return 'Факториал отрицательного числа не найден';
    } else if (number == 0) {
        return 1;
    } else {
        n = number;
        result = 1;
        do {
            result *= n;
            n--;
        } while (n > 1)
        return result;
    }
}

function whileFact(number) {
    if (number < 0) {
        return 'Факториал отрицательного числа не найден';
    } else if (number == 0) {
        return 1;
    } else {
        result = 1;
        n = number;
        while (n > 1) {
            result *= n;
            n--;
        }
        return result;
    }
}

function forFact(number) {
    if (number < 0) {
        return 'Факториал отрицательного числа не найден';
    } else if (number == 0) {
        return 1;
    } else {
        result = 1;
        for (let i = number; i > 1; i--) {
            result *= i;
        }
        return result;
    }
}

console.log(doWhileFact(-1));
console.log(whileFact(0));
console.log(forFact(5));