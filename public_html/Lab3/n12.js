function drag(elementToDrag, event) {
    var scroll = getScrollOffsets();
    var startX = event.clientX + scroll.x;
    var startY = event.clientY + scroll.y;

    var origX = elementToDrag.offsetLeft;
    var origY = elementToDrag.offsetTop;

    var deltaX = startX - origX;
    var deltaY = startY - origY;

    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);

    event.stopPropagation();

    event.preventDefault();

    function moveHandler(e) {
        var scroll = getScrollOffsets();
        elementToDrag.style.left = e.clientX + scroll.x - deltaX + "px";
        elementToDrag.style.top = e.clientY + scroll.y - deltaY + "px";

        e.stopPropagation();
    }

    function upHandler(e) {
        document.removeEventListener("mouseup", upHandler, true);
        document.removeEventListener("mousemove", moveHandler, true);

        e.stopPropagation();
    }
}

function getScrollOffsets(w) {
    w = w || window;

    return { x: w.pageXOffset, y: w.pageYOffset };
}