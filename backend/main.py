from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MOCK_PRODUCTS = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "name": "Jordan Retro 6 G",
                "subtitle": "Men's Golf Shoes",
                "price": 19695,
                "description": "The Air Jordan 6 G delivers the cool of the original MJ game shoe.",
                "size": {
                    "data": [
                        {"size": "UK 6", "enabled": True},
                        {"size": "UK 6.5", "enabled": True},
                        {"size": "UK 7", "enabled": True},
                        {"size": "UK 7.5", "enabled": True},
                    ]
                },
                "original_price": 22000,
                "slug": "jordan-retro-6-g",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p1.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p1.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p2.png", "name": "image-2" } },
                        { "attributes": { "url": "http://localhost:3000/p3.png", "name": "image-3" } },
                        { "attributes": { "url": "http://localhost:3000/p4.png", "name": "image-4" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "jordan" } }
                    ]
                }
            }
        },
        {
            "id": 2,
            "attributes": {
                "name": "Nike Air Max 90",
                "subtitle": "Men's Shoes",
                "price": 12000,
                "original_price": 14000,
                "slug": "nike-air-max-90",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p5.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p5.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p6.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "sneakers" } }
                    ]
                }
            }
        },
        {
            "id": 3,
            "attributes": {
                "name": "Nike Air Force 1 '07",
                "subtitle": "Men's Shoes",
                "price": 9695,
                "description": "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
                "size": {
                    "data": [
                        {"size": "UK 8", "enabled": True},
                        {"size": "UK 9", "enabled": True},
                    ]
                },
                "original_price": 10795,
                "slug": "nike-air-force-1-07",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p2.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p2.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p3.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "jordan" } },
                        { "attributes": { "slug": "sneakers" } }
                    ]
                }
            }
        },
        {
            "id": 4,
            "attributes": {
                "name": "Nike Dunk Low Retro",
                "subtitle": "Men's Shoes",
                "price": 8295,
                "description": "Recognized for its iconic design and incredible comfort.",
                "size": {
                    "data": [
                        {"size": "UK 7", "enabled": True},
                        {"size": "UK 8", "enabled": True},
                        {"size": "UK 9", "enabled": True},
                    ]
                },
                "original_price": 9195,
                "slug": "nike-dunk-low-retro",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p3.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p3.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p4.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "sneakers" } }
                    ]
                }
            }
        },
        {
            "id": 5,
            "attributes": {
                "name": "Air Jordan 1 Mid",
                "subtitle": "Men's Shoes",
                "price": 11495,
                "description": "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps.",
                "size": {
                    "data": [
                        {"size": "UK 7", "enabled": True},
                        {"size": "UK 8", "enabled": True},
                    ]
                },
                "original_price": 0,
                "slug": "air-jordan-1-mid",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p4.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p4.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p5.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "jordan" } }
                    ]
                }
            }
        },
        {
            "id": 6,
            "attributes": {
                "name": "Nike Metcon 8",
                "subtitle": "Training Shoes",
                "price": 11895,
                "description": "You chase the clock, challenging and encouraging each other all in the name of achieving goals and making gains.",
                "size": {
                    "data": [
                        {"size": "UK 9", "enabled": True},
                        {"size": "UK 10", "enabled": True},
                    ]
                },
                "original_price": 13995,
                "slug": "nike-metcon-8",
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p6.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p6.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p7.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "running" } },
                        { "attributes": { "slug": "football" } }
                    ]
                }
            }
        },
        {
            "id": 7,
            "attributes": {
                "name": "Nike Pegasus 40",
                "subtitle": "Running Shoes",
                "price": 11895,
                "original_price": 0,
                "slug": "nike-pegasus-40",
                "size": {
                    "data": [
                        {"size": "UK 8", "enabled": True},
                        {"size": "UK 9", "enabled": True},
                    ]
                },
                "thumbnail": {
                    "data": {
                        "attributes": {
                            "url": "http://localhost:3000/p7.png"
                        }
                    }
                },
                "image": {
                    "data": [
                        { "attributes": { "url": "http://localhost:3000/p7.png", "name": "image-1" } },
                        { "attributes": { "url": "http://localhost:3000/p1.png", "name": "image-2" } },
                    ]
                },
                "categories": {
                    "data": [
                        { "attributes": { "slug": "running" } }
                    ]
                }
            }
        }
    ]
}

MOCK_CATEGORIES = {
    "data": [
        {
            "id": 1,
            "attributes": {
                "name": "Jordan",
                "slug": "jordan",
                "products": { "data": [{}, {}, {}, {}, {}, {}] },
            },
        },
        {
            "id": 2,
            "attributes": {
                "name": "Sneakers",
                "slug": "sneakers",
                "products": { "data": [{}, {}, {}, {}] },
            },
        },
         {
            "id": 3,
            "attributes": {
                "name": "Running Shoes",
                "slug": "running",
                "products": { "data": [{}, {}, {}, {}, {}, {}, {}, {}] },
            },
        },
        {
            "id": 4,
            "attributes": {
                "name": "Football Shoes",
                "slug": "football",
                "products": { "data": [{}, {}, {}] },
            },
        },
    ],
}

@app.get("/api/products")
def get_products(request: Request):
    params = request.query_params
    
    # Filter by Category Slug
    # Strapi format: filters[categories][slug][$eq]=value
    # We'll validte if the key contains 'categories' and 'slug'
    category_slug = None
    for key, value in params.items():
        if "categories" in key and "slug" in key and "eq" in key:
            category_slug = value
            break
            
    filtered_data = MOCK_PRODUCTS["data"]
    
    if category_slug:
        filtered_data = [
            p for p in filtered_data 
            if any(c["attributes"]["slug"] == category_slug for c in p["attributes"]["categories"]["data"])
        ]

    # Implement Pagination (Basic)
    page = 1
    page_size = 100 # Default large
    
    for key, value in params.items():
        if "pagination[page]" in key:
            try:
                page = int(value)
            except:
                pass
        if "pagination[pageSize]" in key:
             try:
                page_size = int(value)
             except:
                pass
                
    total = len(filtered_data)
    start = (page - 1) * page_size
    end = start + page_size
    
    paginated_data = filtered_data[start:end]
    
    return {
        "data": paginated_data,
        "meta": {
            "pagination": {
                "page": page,
                "pageSize": page_size,
                "pageCount": (total + page_size - 1) // page_size if page_size > 0 else 1,
                "total": total
            }
        }
    }

@app.get("/api/categories")
def get_categories():
    return MOCK_CATEGORIES

@app.get("/api/products/{slug}")
def get_product(slug: str):
    product = next((item for item in MOCK_PRODUCTS["data"] if item["attributes"]["slug"] == slug), None)
    if product:
        return {"data": [product]} 
    return {"data": []}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
