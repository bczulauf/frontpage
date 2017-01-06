const Api = (function () {
    return {
        getSite: () => {
            const promise = new Promise((resolve, reject) => {
                const data = {
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
                            rows: {
                                elements: [
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
                            }
                        }
                    },
                    pages: [
                        {
                            id: "home",
                            name: "home",
                            type: "home",
                            rows: [
                                {
                                    elements: [
                                        {
                                            type: "image",
                                            length: "col4",
                                            options: {
                                                text: "Welcome to my wonderful site!"
                                            }
                                        }
                                    ]
                                },
                                {
                                    elements: [
                                        {
                                            type: "text",
                                            length: "col8",
                                            options: {
                                                text: "Welcome to my wonderful site!"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "home",
                            name: "home",
                            type: "home",
                            rows: [
                                {
                                    elements: [
                                        {
                                            type: "text",
                                            length: "col4",
                                            options: {
                                                text: "Welcome to my wonderful site!"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

                resolve(data);
            });
            return promise;
        }
    }
}());