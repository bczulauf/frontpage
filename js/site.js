const SiteModule = (function() {
    const module = {};
    const siteTemplate = `<div class="explorer">hello</div>`;
    
    module.Site = class Site {
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

            return promise;
        }
    }

    return module;
}());