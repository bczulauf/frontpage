(function() {
    const sideElem = $("#side");
    const mainElem = $("#main");
    Api.getSite().then((data) => {
        const siteName = data.name;
        const pages = data.pages.map(function(page){
            return {
                id: page.id,
                name: page.name,
                type: page.type,
            }
        });
        const explorer = new ExplorerModule.Explorer(sideElem, data);


        //const site = new SiteModule.Site(containerElem, siteName, pages);
        explorer.render().then(() => {
            console.log("time to build some pages");
        });
    });
}());