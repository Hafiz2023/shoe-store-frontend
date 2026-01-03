import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const SpotlightCollections = () => {
    return (
        <Wrapper className="my-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-oswald uppercase mb-4">Spotlight Collections</h2>
                <div className="w-20 h-1 bg-black mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-[400px] group overflow-hidden cursor-pointer rounded-lg">
                    <Image src="/slide-1.png" alt="Jordan" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-white text-4xl font-oswald font-bold uppercase mb-4">Jordan</h3>
                            <Link href="/category/jordan" className="bg-white text-black px-8 py-3 font-oswald uppercase font-medium hover:bg-gray-100 transition-colors">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-4 h-[400px]">
                    <div className="relative group overflow-hidden cursor-pointer rounded-lg">
                        <Image src="/slide-3.png" alt="Running" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-oswald font-bold uppercase mb-2">Running</h3>
                                <Link href="/category/running" className="text-white underline font-oswald uppercase text-sm font-bold">
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden cursor-pointer rounded-lg">
                        <Image src="/slide-2.png" alt="Sneakers" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-oswald font-bold uppercase mb-2">Sneakers</h3>
                                <Link href="/category/sneakers" className="text-white underline font-oswald uppercase text-sm font-bold">
                                    View Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SpotlightCollections;
