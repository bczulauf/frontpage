(function() {
    const classes = ["col1", "col2", "col3", "col4", "col5", "col6", "col7", "col8", "col9", "col10", "col11", "col12"];
    const widths = [80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960];
    const widthLookup = Util.createLookup(widths, classes);
    const resizeTemplate = `<div class="resize-handle"></div>`;

    class Resizable {
        constructor (element) {
            this.element = element;
            const resizeHandle = $(resizeTemplate);
            let initialWidth = 0;
            let initialX = 0;
            let widthIndex = 0;
            let currentWidthClass = "";
            element.addClass("resizable");
            element.append(resizeTemplate);

            let canResize = true;

            const mousemoveHandler = (evt) => {
                evt.preventDefault();
                if (canResize) {
                    canResize = false;
                    window.requestAnimationFrame(() => {
                        const low = widthIndex > 0 ? widthIndex - 1 : 0;
                        const high = widthIndex + 2;
                        const widthRange = widths.slice(low, high);
                        const changeInX = evt.clientX - initialX;

                        // Finds which known width the current width is closest to.
                        const newWidth = Util.closest(initialWidth + changeInX, widthRange);
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

            resizeHandle.on("mousedown", (evt) => {
                // Ensures that the cursor is styled resize.
                $(document.body).addClass("cursor-resize");
                initialWidth = element.width();
                initialX = evt.clientX;
                currentWidthClass = widths[initialWidth];

                // Finds the initial width index.
                // We use the width index to check which known width the element is closest to.
                for (let i = 0; i < widths.length; i++) {
                    if (initialWidth === widths[i]) {
                        widthIndex = i;
                        break;
                    }
                }

                // Adds event listeners for mousemove and mouseup.
                $(document)
                    .on("mousemove", mousemoveHandler)
                    .on("mouseup", mouseupHandler);
            });
        }
    }
}());