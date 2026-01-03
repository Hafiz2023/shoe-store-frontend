"use strict";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const MOCK_PRODUCTS = {
    data: [
        {
            id: 1,
            attributes: {
                name: "Jordan Retro 6 G",
                subtitle: "Men's Golf Shoes",
                price: 19695,
                description: "The Air Jordan 6 G delivers the cool of the original MJ game shoe.",
                size: {
                    data: [
                        { size: "UK 6", enabled: true },
                        { size: "UK 6.5", enabled: true },
                        { size: "UK 7", enabled: true },
                        { size: "UK 7.5", enabled: true },
                    ],
                },
                original_price: 22000,
                slug: "jordan-retro-6-g",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p1.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p1.png", name: "image-1" } },
                        { attributes: { url: "/p2.png", name: "image-2" } },
                        { attributes: { url: "/p3.png", name: "image-3" } },
                        { attributes: { url: "/p4.png", name: "image-4" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 2,
            attributes: {
                name: "Nike Air Max 90",
                subtitle: "Men's Shoes",
                price: 12000,
                original_price: 14000,
                slug: "nike-air-max-90",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p5.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p5.png", name: "image-1" } },
                        { attributes: { url: "/p6.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "sneakers" } },
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 3,
            attributes: {
                name: "Nike Air Force 1 '07",
                subtitle: "Men's Shoes",
                price: 9695,
                description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
                size: {
                    data: [
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                original_price: 10795,
                slug: "nike-air-force-1-07",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p2.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p2.png", name: "image-1" } },
                        { attributes: { url: "/p3.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "jordan" } },
                        { attributes: { slug: "sneakers" } }
                    ]
                }
            },
        },
        {
            id: 4,
            attributes: {
                name: "Nike Dunk Low Retro",
                subtitle: "Men's Shoes",
                price: 8295,
                description: "Recognized for its iconic design and incredible comfort.",
                size: {
                    data: [
                        { size: "UK 7", enabled: true },
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                original_price: 9195,
                slug: "nike-dunk-low-retro",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p3.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p3.png", name: "image-1" } },
                        { attributes: { url: "/p4.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "sneakers" } },
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 5,
            attributes: {
                name: "Air Jordan 1 Mid",
                subtitle: "Men's Shoes",
                price: 11495,
                description: "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps.",
                size: {
                    data: [
                        { size: "UK 7", enabled: true },
                        { size: "UK 8", enabled: true },
                    ],
                },
                original_price: 0,
                slug: "air-jordan-1-mid",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p4.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p4.png", name: "image-1" } },
                        { attributes: { url: "/p5.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 6,
            attributes: {
                name: "Nike Metcon 8",
                subtitle: "Training Shoes",
                price: 11895,
                description: "You chase the clock, challenging and encouraging each other all in the name of achieving goals and making gains.",
                size: {
                    data: [
                        { size: "UK 9", enabled: true },
                        { size: "UK 10", enabled: true },
                    ],
                },
                original_price: 13995,
                slug: "nike-metcon-8",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p6.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p6.png", name: "image-1" } },
                        { attributes: { url: "/p7.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "running" } },
                        { attributes: { slug: "football" } },
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 7,
            attributes: {
                name: "Nike Pegasus 40",
                subtitle: "Running Shoes",
                price: 11895,
                original_price: 0,
                slug: "nike-pegasus-40",
                size: {
                    data: [
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p7.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p7.png", name: "image-1" } },
                        { attributes: { url: "/p1.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "running" } },
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 8,
            attributes: {
                name: "Nike Air Max Pulse",
                subtitle: "Men's Shoes",
                price: 13995,
                original_price: 0,
                slug: "nike-air-max-pulse",
                size: {
                    data: [
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p5.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p5.png", name: "image-1" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 9,
            attributes: {
                name: "Nike Air Max 97",
                subtitle: "Men's Shoes",
                price: 16995,
                description: "Featuring the original ripple design inspired by Japanese bullet trains.",
                size: {
                    data: [
                        { size: "UK 7", enabled: true },
                        { size: "UK 10", enabled: true },
                    ],
                },
                original_price: 0,
                slug: "nike-air-max-97",
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p2.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p2.png", name: "image-1" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "jordan" } }
                    ]
                }
            },
        },
        {
            id: 10,
            attributes: {
                name: "Nike Zoom Fly 5",
                subtitle: "Running Shoes",
                price: 14995,
                original_price: 16995,
                slug: "nike-zoom-fly-5",
                description: "Bridge the gap between your weekend training run and race day in a durable design.",
                size: {
                    data: [
                        { size: "UK 7", enabled: true },
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p1.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p1.png", name: "image-1" } },
                        { attributes: { url: "/p7.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "running" } }
                    ]
                }
            },
        },
        {
            id: 11,
            attributes: {
                name: "Nike React Infinity 3",
                subtitle: "Running Shoes",
                price: 13295,
                original_price: 0,
                slug: "nike-react-infinity-3",
                size: {
                    data: [
                        { size: "UK 8", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p6.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p6.png", name: "image-1" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "running" } }
                    ]
                }
            },
        },
        {
            id: 12,
            attributes: {
                name: "Nike Zoom Mercurial Superfly 9",
                subtitle: "Football Shoes",
                price: 24995,
                original_price: 0,
                slug: "nike-zoom-mercurial-superfly-9",
                description: "Instantly tilt the field in the bold design of the Superfly 9 Elite FG.",
                size: {
                    data: [
                        { size: "UK 8", enabled: true },
                        { size: "UK 9", enabled: true },
                        { size: "UK 10", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p4.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p4.png", name: "image-1" } },
                        { attributes: { url: "/p6.png", name: "image-2" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "football" } }
                    ]
                }
            },
        },
        {
            id: 13,
            attributes: {
                name: "Nike Phantom GX Elite",
                subtitle: "Football Shoes",
                price: 21995,
                original_price: 0,
                slug: "nike-phantom-gx-elite",
                size: {
                    data: [
                        { size: "UK 7", enabled: true },
                        { size: "UK 9", enabled: true },
                    ],
                },
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p5.png",
                        },
                    },
                },
                image: {
                    data: [
                        { attributes: { url: "/p5.png", name: "image-1" } },
                    ],
                },
                categories: {
                    data: [
                        { attributes: { slug: "football" } }
                    ]
                }
            },
        }
    ],
};

const MOCK_CATEGORIES = {
    data: [
        {
            id: 1,
            attributes: {
                name: "Jordan",
                slug: "jordan",
                products: { data: [] },
            },
        },
        {
            id: 2,
            attributes: {
                name: "Sneakers",
                slug: "sneakers",
                products: { data: [] },
            },
        },
        {
            id: 3,
            attributes: {
                name: "Running Shoes",
                slug: "running",
                products: { data: [] },
            },
        },
        {
            id: 4,
            attributes: {
                name: "Football Shoes",
                slug: "football",
                products: { data: [] },
            },
        },
    ],
};

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    try {
        const res = await fetch(`${API_URL}${endpoint}`, options);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        return data;
    } catch (error) {
        console.warn("API Fetch Error, using mock data:", error);

        // Return appropriate mock data based on endpoint
        if (endpoint.includes("/api/categories")) {
            const slugMatch = endpoint.match(/filters\[slug\]\[\$eq\]=([^&]+)/);
            if (slugMatch && slugMatch[1]) {
                const categorySlug = slugMatch[1];
                const filteredCategories = MOCK_CATEGORIES.data.filter(c =>
                    c.attributes.slug === categorySlug
                );
                return { data: filteredCategories };
            }
            return MOCK_CATEGORIES;
        }
        if (endpoint.includes("/api/products")) {
            const params = new URLSearchParams(endpoint.split('?')[1]);
            const filters = endpoint.match(/filters\[categories\]\[slug\]\[\$eq\]=([^&]+)/);

            if (filters && filters[1]) {
                const categorySlug = filters[1];
                const filteredProducts = MOCK_PRODUCTS.data.filter(p =>
                    p.attributes.categories.data.some(c => c.attributes.slug === categorySlug)
                );
                return { data: filteredProducts, meta: { pagination: { total: filteredProducts.length, pageCount: 1 } } };
            }

            // Basic filtering simulation
            if (endpoint.includes("slug")) {
                const slugMatch = endpoint.match(/filters\[slug\]\[\$eq\]=([^&]+)/);
                if (slugMatch && slugMatch[1]) {
                    const product = MOCK_PRODUCTS.data.find(p => p.attributes.slug === slugMatch[1]);
                    return { data: product ? [product] : [] };
                }
                return MOCK_PRODUCTS;
            }
            return MOCK_PRODUCTS;
        }

        return { data: [] };
    }
};

export const makePaymentRequest = async (endpoint, payload) => {
    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + STRAPI_API_TOKEN,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Payment API Error:", error);
        return { error: "Payment failed" };
    }
};
