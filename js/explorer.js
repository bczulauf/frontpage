const ExplorerModule = (function() {
    const module = {};

    // I could create a folder class that takes in an element and returns the same template.
    // It could also contain the folder click handlers, etc. and whether it is open.
    // Also can i do a generic tree recursion that does the map and join?
    
    module.Explorer = class Explorer {
        constructor (element, data) {
            this.element = element;
            this.data = data;
        }
        getElementTemplate(elements) {
            return elements.map((element) => {
                return `<li class="folder">${element.type}</li>`
            }).join("");
        }
        getRowTemplate(rows) {
            return rows.map((row) => {
                return `<li class="folder"><div>row</div><ul>${this.getElementTemplate(row.elements)}</ul></li>`
            }).join("");
        }
        getPageTemplate(pages) {
            return pages.map((page) => {
                return `<div class="folder"><div>${page.name}</div><ul>${this.getRowTemplate(page.rows)}</ul></div>`
            }).join("");
        }
        getTemplate() {
            const data = this.data;
            return `<div class="folder"><div>${data.name}</div><ul>${this.getPageTemplate(data.pages)}</ul></div>`
        }
        render() {
            const promise = new Promise((resolve, reject) => {
                this.element.html(this.getTemplate());
                resolve();
            });

            return promise;
        }
    }

    return module;
}());