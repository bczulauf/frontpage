const widthLookup = createLookup(widths, classes);
let element;
let initialWidth = 0;
let initialX = 0;
let widthIndex = 0;
let currentWidthClass = "";
let canResize = true;

const mousemoveHandler = (evt) => {
    evt.preventDefault();
    if (canResize) {
        canResize = false;
        window.requestAnimationFrame(() => {
            const low = widthIndex > 0 ? widthIndex - 1 : 0;
            const high = widthIndex + 2;
            const widthRange = widths.slice(low, high);
            const newWidth = closest(initialWidth + evt.clientX - initialX, widthRange);
            const newWidthClass = widthLookup[newWidth];

            if (newWidthClass !== currentWidthClass) {
                widthIndex = classes.indexOf(newWidthClass);
                element.removeClass(currentWidthClass);
                element.addClass(newWidthClass);
                currentWidthClass = newWidthClass;
            }
            canResize = true;
        });
    }
}

const mouseupHandler = (evt) => {
    $(document.body).removeClass("cursor-resize");
    $(document).off("mousemove", mousemoveHandler);
    $(document).off("mouseup", mouseupHandler);
}

$(".resize-handle").on("mousedown", (evt) => {

    element = $(evt.target).parent(); 

    initialWidth = element.width();
    initialX = evt.clientX;
    currentWidthClass = widths[initialWidth];

    widths.forEach((width, index) => {
        if (initialWidth === width) {
            widthIndex = index;
        }
    });

    $(document)
        .on("mousemove", mousemoveHandler)
        .on("mouseup", mouseupHandler);
});