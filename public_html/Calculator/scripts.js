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

function factorial(actString) {

}

let display = document.getElementById('display');
let advancedButtons = Array.from(document.getElementsByClassName('advanced-button'));

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'x^2':
                display.innerText += '^2';
                break;
            case 'x^3':
                display.innerText += '^3';
                break;
            case 'x^y':
                display.innerText += '^';
                break;
            case 'x!':
                display.innerText += '!';
                b12 = factorial(actualString);
                actualString = actualString.slice(0, actualString.lastIndexOf(b12[0] + 1));
                actualString += b12[1];
                break;
            case '√':
                display.innerText += "√("
                break;
            case 'π':
                display.innerText += "π"
                break;
            case 'e':
                display.innerText += "e";
                break;
            case 'ln':
                display.innerText += 'ln(';
                break;
            case 'log':
                display.innerText += 'log(';
                break;
            case 'sin':
                display.innerText += 'sin(';
                break;
            case 'cos':
                display.innerText += 'cos(';
                break;
            case 'tan':
                display.innerText += 'tan(';
                break;
            case '-':
                if (display.innerText.slice(-1) == "-") {
                    return;
                } else {
                    display.innerText += '-';
                }
                break;
            case '=':
                try {
                    hiddenString = display.innerText;
                    hiddenString = hiddenString.replaceAll('^', '**');
                    hiddenString = hiddenString.replaceAll('√', 'Math.sqrt');
                    hiddenString = hiddenString.replaceAll('π', 'Math.PI');
                    hiddenString = hiddenString.replaceAll('e', 'Math.E');
                    hiddenString = hiddenString.replaceAll('ln', 'Math.log');
                    hiddenString = hiddenString.replaceAll('log', 'Math.log10');
                    hiddenString = hiddenString.replaceAll('sin', 'Math.sin');
                    hiddenString = hiddenString.replaceAll('cos', 'Math.cos');
                    hiddenString = hiddenString.replaceAll('tan', 'Math.tan');
                    console.log(hiddenString);
                    display.innerText = eval(hiddenString);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'Mode':
                advancedButtons.forEach(button => {
                    button.style.display = button.style.display == 'none' ? 'grid' : 'none';
                });
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});