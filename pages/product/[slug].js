import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import Link from "next/link";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;

    if (!p) return <div className="min-h-screen pt-40 text-center font-bold text-xl">Loading or Product Not Found</div>;

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="w-full min-h-screen bg-white">
            <Head>
                <title>{`${p.name} | Shoe Store`}</title>
                <meta name="description" content={p.subtitle || `Buy ${p.name} at the best price.`} />
            </Head>

            <ToastContainer />

            {/* Breadcrumb - Added for better navigation */}
            <div className="w-full bg-gray-50 py-4 mb-8 border-b border-gray-100">
                <Wrapper>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-black line-clamp-1">{p.name}</span>
                    </div>
                </Wrapper>
            </div>

            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* Left Column: Image Carousel */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image?.data} />
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex-[1] py-3">
                        {/* Title & Subtitle */}
                        <h1 className="text-[34px] md:text-[40px] font-bold mb-2 leading-none font-oswald uppercase text-black">
                            {p.name}
                        </h1>
                        <div className="text-lg font-medium mb-6 text-black/[0.6]">
                            {p.subtitle}
                        </div>

                        {/* Price Section */}
                        <div className="flex items-center mb-8">
                            <p className="mr-3 text-2xl font-bold tracking-tight">
                                &#8377;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-lg font-medium line-through text-black/[0.4]">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-3 text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">
                                        {getDiscountedPricePercentage(p.original_price, p.price)}% OFF
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-12">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Size Selection */}
                        <div className="mb-10">
                            <div className="flex justify-between mb-3 items-end">
                                <div className="text-md font-bold uppercase tracking-wider">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer hover:text-black transition-colors underline underline-offset-2">
                                    Size Guide
                                </div>
                            </div>

                            <div id="sizesGrid" className="grid grid-cols-3 gap-3">
                                {p.size?.data?.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border-2 rounded-lg text-center py-3 font-medium transition-all duration-200
                                            ${item.enabled
                                                ? "hover:border-black cursor-pointer bg-white"
                                                : "cursor-not-allowed bg-black/[0.05] opacity-40 border-transparent"
                                            } 
                                            ${selectedSize === item.size ? "border-black bg-black text-white" : "border-gray-200"}
                                        `}
                                        onClick={() => {
                                            if (!item.enabled) return;
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>

                            {showError && (
                                <div className="text-red-600 mt-2 font-medium text-sm animate-pulse">
                                    Please select a size to continue.
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <button
                            className="w-full py-5 rounded-full bg-black text-white text-lg font-bold uppercase tracking-widest transition-all active:scale-95 mb-4 hover:bg-black/[0.8] shadow-lg hover:shadow-xl"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document.getElementById("sizesGrid").scrollIntoView({
                                        block: "center",
                                        behavior: "smooth",
                                    });
                                } else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>

                        <button className="w-full py-5 rounded-full border-2 border-black text-black text-lg font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 hover:bg-gray-50 mb-10">
                            Wishlist
                            <IoMdHeartEmpty size={24} />
                        </button>

                        {/* Description */}
                        <div className="pt-10 border-t border-gray-200">
                            <div className="text-xl font-bold mb-5 font-oswald uppercase">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5 leading-relaxed text-gray-600">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* Right Column End */}
                </div>

                {/* Related Products Section */}
                <div className="mt-[80px] md:mt-[120px] mb-[100px]">
                    <RelatedProducts products={products} />
                </div>
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
