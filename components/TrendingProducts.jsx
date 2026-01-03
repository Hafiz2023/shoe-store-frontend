import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import Link from "next/link";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const TrendingProducts = ({ products }) => {
    return (
        <div className="mb-14">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl md:text-3xl font-bold font-oswald uppercase">Trending Now</h2>
                <Link href="/category/sneakers" className="text-sm font-medium underline">View All</Link>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
            >
                {products?.data?.slice(0, 5).map((product) => (
                    <ProductCard key={`trending-${product?.id}`} data={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default TrendingProducts;
