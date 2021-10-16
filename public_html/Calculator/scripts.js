let display = document.getElementById("display");
let typeButton = document.getElementById("type-button");
let advancedButtons = Array.from(
    document.getElementsByClassName("advanced-button")
);

let buttons = Array.from(document.getElementsByClassName("button"));

let curType = 'Rad';

var exprs = {
    "^": "**",
    "e": "Math.E",
    "π": "Math.PI",
    "√": "Math.sqrt",
    "log": "Math.log10",
    "ln": "Math.log",
    "sin": ["Math.sin", "Math.sin(Math.PI/180*"],
    "cos": ["Math.cos", "Math.cos(Math.PI/180*"],
    "tan": ["Math.tan", "Math.tan(Math.PI/180*"],
};

function getListIdx(str, substr) {
    let listIdx = []
    let lastIndex = -1
    while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
        listIdx.push(lastIndex)
    }
    return listIdx
}

function toEvalString(string) {
    innerText = string;
    Object.keys(exprs).forEach(expr => {
        if (innerText.includes(expr) && expr != "^") {
            regExp = new RegExp(expr);
            buf = innerText;
            newInnerTextParts = [];
            for (let i = 0; i < getListIdx(innerText, expr).length; i++) {
                exprPos = buf.indexOf(expr);
                _slice = buf.slice(exprPos - 1, exprPos);
                if (_slice != "(" && _slice != "*" && _slice != '+' && _slice != '-' && _slice != '/' && exprPos != 0) {
                    newInnerTextParts.push(buf.slice(0, exprPos + expr.length).replace(expr, "*" + expr));
                } else {
                    newInnerTextParts.push(buf.slice(0, exprPos + expr.length));
                }
                buf = buf.slice(exprPos + expr.length);
            }
            newInnerTextParts.push(buf);
            innerText = newInnerTextParts.join("");
        }
    })

    innerText = innerText.replaceAll('(', '((');
    innerText = innerText.replaceAll(')', '))');

    Object.keys(exprs).forEach(expr => {
        if (expr == "sin" || expr == "cos" || expr == "tan") {
            if (curType == "Deg") {
                innerText = innerText.replaceAll(expr + '(', exprs[expr][1]);
            } else {
                innerText = innerText.replaceAll(expr, exprs[expr][0]);
            }
        } else {
            innerText = innerText.replaceAll(expr, exprs[expr]);
        }
    })

    return innerText;
}

function displayCheck() {
    if (display.innerText == "Error" || display.innerText == "Infinity") {
        display.innerText = "";
    }
}

typeButton.addEventListener("click", (e) => {
    e.target.innerText = curType = e.target.innerText == "Rad" ? "Deg" : "Rad";
})

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "x^2":
                displayCheck();
                display.innerText += "^2";
                break;
            case "x^3":
                displayCheck();
                display.innerText += "^3";
                break;
            case "x^y":
                displayCheck();
                display.innerText += "^";
                break;
            case "Rad":
                break;
            case "Deg":
                break;
            case "√":
                displayCheck();
                display.innerText += "√(";
                break;
            case "π":
                displayCheck();
                display.innerText += "π";
                break;
            case "e":
                displayCheck();
                display.innerText += "e";
                break;
            case "ln":
                displayCheck();
                display.innerText += "ln(";
                break;
            case "log":
                displayCheck();
                display.innerText += "log(";
                break;
            case "sin":
                displayCheck();
                display.innerText += "sin(";
                break;
            case "cos":
                displayCheck();
                display.innerText += "cos(";
                break;
            case "tan":
                displayCheck();
                display.innerText += "tan(";
                break;
            case "-":
                displayCheck();
                if (display.innerText.slice(-1) == "-") {
                    return;
                } else {
                    display.innerText += "-";
                }
                break;
            case "=":
                if (display.innerText == "") return;
                try {
                    display.innerText = Function('return ' + toEvalString(display.innerText))();
                } catch {
                    display.innerText = "Error";
                }
                break;
            case "←":
                displayCheck();
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "Mode":
                advancedButtons.forEach((button) => {
                    button.style.display =
                        button.style.display == "none" ? "grid" : "none";
                });
                break;
            default:
                displayCheck();
                if (display.innerText == "0") display.innerText = "";
                display.innerText += e.target.innerText;
        }
    });
});