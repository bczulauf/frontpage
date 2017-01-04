(function() {
    const siteTemplate = `<div class="explorer"></div>`;
    class Site {
        constructor (element, name, pages) {
            this.element = element;
            this.name = name;
            this.pages = pages;
        }

        render () {
            const promise = new Promise((resolve, reject) => {
                this.element.html(siteTemplate);
                resolve();
            });
        }
    }
}());