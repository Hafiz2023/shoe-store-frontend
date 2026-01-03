import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";

const maxResult = 9; // Increased items per page for a fuller grid

const Category = ({ category, products, slug }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
        // Scroll to top on category change
        window.scrollTo(0, 0);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: products,
        }
    );

    // Sort Order State (Future implementation)
    // const [sortOrder, setSortOrder] = useState('newest');

    const categoryName = category?.data?.[0]?.attributes?.name || "Collection";
    const isJordan = slug === "jordan";
    const isSneakers = slug === "sneakers";
    const isRunning = slug === "running";
    const isFootball = slug === "football";

    return (
        <>
            <Head>
                <title>{`${categoryName} | Shoe Store`}</title>
                <meta name="description" content={`Explore the latest ${categoryName} collection.`} />
            </Head>

            <div className="w-full min-h-screen bg-white pb-20">
                {/* Hero Section */}
                <div className={`w-full relative flex items-center justify-center overflow-hidden h-[400px] md:h-[500px]
                    ${(isJordan || isSneakers || isRunning || isFootball) ? 'bg-black text-white' : 'bg-gray-100 text-black'} 
                    mb-10 transition-all duration-500`}
                >
                    {/* Background Image for Jordan */}
                    {isJordan && (
                        <>
                            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                                <Image
                                    src="/slide-1.png"
                                    alt="Jordan Collection"
                                    fill
                                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/50 z-0"></div>
                        </>
                    )}

                    {/* Background Image for Sneakers */}
                    {isSneakers && (
                        <>
                            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                                <Image
                                    src="/slide-2.png"
                                    alt="Sneakers Collection"
                                    fill
                                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 z-0"></div>
                        </>
                    )}

                    {/* Background Image for Running & Football */}
                    {(isRunning || isFootball) && (
                        <>
                            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                                <Image
                                    src="/slide-3.png"
                                    alt="Sport Collection"
                                    fill
                                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 z-0"></div>
                        </>
                    )}

                    {/* Default Background Pattern */}
                    {!isJordan && !isSneakers && !isRunning && !isFootball && (
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    )}

                    <Wrapper className="relative z-10 text-center">
                        <div className="uppercase tracking-[0.2em] text-sm md:text-base font-bold opacity-90 mb-4 animate-fadeIn">
                            {(() => {
                                if (isJordan) return "Legendary Performance";
                                if (isSneakers) return "Street Style Icons";
                                if (isRunning) return "Run Your Best";
                                if (isFootball) return "Play Beautiful";
                                return "New Arrivals";
                            })()}
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold font-oswald uppercase leading-none mb-6 drop-shadow-2xl">
                            {categoryName}
                        </h1>
                        <p className={`max-w-2xl mx-auto text-lg md:text-2xl font-medium drop-shadow-md ${(isJordan || isSneakers || isRunning || isFootball) ? 'text-gray-100' : 'text-gray-600'}`}>
                            {(() => {
                                if (isJordan) return "Defy gravity and elevate your game with the iconic Jordan collection. Designed for champions.";
                                if (isSneakers) return "Step up your game with the freshest kicks. Unmatched style and comfort for every step.";
                                if (isRunning) return "Push your limits with advanced cushioning and responsiveness. The track is yours.";
                                if (isFootball) return "Dominate the field with precision and speed. Engineered for the world's game.";
                                return `Discover our premium selection of ${categoryName}, crafted for style and performance.`;
                            })()}
                        </p>
                    </Wrapper>
                </div>

                <Wrapper>
                    {/* Breadcrumb & Toolbar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <Link href="/" className="hover:text-black transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-black capitalize">{categoryName}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">
                                Showing {data?.data?.length || 0} Products
                            </span>
                            {/* Sorting Dropdown (Visual Only) */}
                            <div className="relative group cursor-pointer border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 hover:border-black transition-colors bg-white">
                                <span className="text-sm font-medium">Sort By: Newest</span>
                                <IoIosArrowDropdown className="text-lg" />
                                {/* Dropdown Menu */}
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 hidden group-hover:block overflow-hidden z-20">
                                    <div className="p-2 flex flex-col gap-1">
                                        <div className="px-3 py-2 hover:bg-gray-50 text-sm cursor-pointer rounded-md font-medium">Newest</div>
                                        <div className="px-3 py-2 hover:bg-gray-50 text-sm cursor-pointer rounded-md font-medium">Price: Low to High</div>
                                        <div className="px-3 py-2 hover:bg-gray-50 text-sm cursor-pointer rounded-md font-medium">Price: High to Low</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    {isLoading ? (
                        <div className="min-h-[400px] flex flex-col gap-5 justify-center items-center">
                            <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                            <span className="text-lg font-bold font-oswald tracking-wider animate-pulse">LOADING...</span>
                        </div>
                    ) : (data?.data?.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                {data?.data?.map((product, index) => (
                                    <ProductCard key={product?.id} data={product} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {data?.meta?.pagination?.total > maxResult && (
                                <div className="flex gap-3 items-center justify-center mt-20">
                                    <button
                                        className={`rounded-full py-3 px-8 text-sm font-bold tracking-wide transition-all border-2 
                                            ${pageIndex === 1
                                                ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                                                : "bg-white text-black border-black hover:bg-black hover:text-white"
                                            }`}
                                        disabled={pageIndex === 1}
                                        onClick={() => setPageIndex(pageIndex - 1)}
                                    >
                                        PREVIOUS
                                    </button>

                                    <div className="flex items-center px-4 font-bold text-lg">
                                        Page {pageIndex} of {data?.meta?.pagination?.pageCount}
                                    </div>

                                    <button
                                        className={`rounded-full py-3 px-8 text-sm font-bold tracking-wide transition-all border-2
                                            ${pageIndex === (data && data.meta.pagination.pageCount)
                                                ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                                                : "bg-white text-black border-black hover:bg-black hover:text-white"
                                            }`}
                                        disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                                        onClick={() => setPageIndex(pageIndex + 1)}
                                    >
                                        NEXT
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center min-h-[400px] text-center max-w-lg mx-auto">
                            <Image src="/empty-cart.jpg" width={300} height={300} alt="No products" className="opacity-50 grayscale mb-6" />
                            <h2 className="text-3xl font-bold mb-2">No Products Found</h2>
                            <p className="text-gray-500 mb-8">
                                We couldn't find any products in this category at the moment. Please check back later or explore other collections.
                            </p>
                            <Link href="/" className="py-4 px-8 rounded-full bg-black text-white font-oswald text-lg uppercase tracking-wide hover:opacity-80 transition-opacity">
                                Continue Shopping
                            </Link>
                        </div>
                    ))}
                </Wrapper>
            </div>
        </>
    );
};

export default Category;

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/categories?populate=*");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromApi(
        `/api/categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );

    return {
        props: {
            category,
            products,
            slug,
        },
    };
}
