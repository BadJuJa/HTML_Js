function elmFunc(tag) {
    if (document.getElementsByTagName(tag).length == 0) {
        return "Нет такого тэга";
    }
    out = "";
    s(document.childNodes[1], tag.toUpperCase(), 1);
    return out;

    function s(node, tag) {
        if (node.childNodes.length > 0) {
            for (var i = 0; i < node.childNodes.length; i++) {
                let rez = s(node.childNodes[i], tag);
                if (rez != undefined && rez != "" && rez != null) {
                    out += rez + "<br>";
                }
            }
        } else {
            if (node.nodeName == tag) {
                let buffer = [];
                let str = "";

                buffer.push(node.nodeName);
                lastParent = node.parentNode;
                while (lastParent != null) {
                    buffer.push(lastParent.nodeName);
                    lastParent = (function(x) {
                        if (x.parentNode != null) return x.parentNode;
                    })(lastParent);
                }
                buffer.reverse().forEach((e) => {
                    str += e + "--";
                });
                str = str.slice(0, -2);
                return str;
            }
        }
    }
}

document.getElementById("1").innerHTML = elmFunc("a");