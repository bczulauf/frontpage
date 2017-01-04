const Api = (function () {
    return {
        getSite: () => {
            const promise = new Promise((resolve, reject) => {
                const siteObj = {
                    name: "welcome",
                    core: {
                        header: {
                            rows: [
                                [
                                    {
                                        type: "site-title",
                                        length: "col4",
                                        options: {
                                            title: "welcome!"
                                        }
                                    },
                                    {
                                        type: "nav",
                                        length: "col8",
                                        options: {
                                            links: [
                                                "home",
                                                "welcome-blog"
                                            ]
                                        }
                                    }
                                ]
                            ]
                        },
                        footer: {
                            rows: [
                                [
                                    {
                                        type: "nav",
                                        length: "col8",
                                        options: {
                                            links: [
                                                "home",
                                                "welcome-blog"
                                            ]
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                    pages: [
                        {
                            id: "home",
                            name: "home",
                            type: "home",
                            rows: [
                                [
                                    {
                                        type: "text",
                                        length: "col4",
                                        options: {
                                            text: "Welcome to my wonderful site!"
                                        }
                                    }
                                ]
                            ]
                        },
                        {
                            id: "welcome-blog",
                            name: "welcome blog",
                            type: "blog"
                        }
                    ]
                }

                resolve(siteObj);
            });
            return promise;
        }
    }
}());