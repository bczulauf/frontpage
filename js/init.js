(function() {
    Api.getSite().then((siteObj) => {
        const pages = siteObj.pages.map(function(page){
            return {
                id: page.id,
                name: page.name,
                type: page.type,
            }
        });
        const site = new Site(siteObj.name, pages);
        site.render().then(() => {
            console.log("time to build some pages");
        });
    });
}());