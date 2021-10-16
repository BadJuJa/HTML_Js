function f(myNode, pr) {
    var kol = myNode.ele;
    var str = "<br>" + pr + myNode.nodeName + "-" + kol;
    for (var i = 0; i < kol; i++) {
        str += f(myNode.childNodes[i], pr + "--");
    }
    return str;
}

document.getElementById("1").innerHTML = f(document, "");