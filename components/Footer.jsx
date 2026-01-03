"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <Link href="/" className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.8]">
                            Home
                        </Link>
                        <Link href="/about" className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.8]">
                            About Us
                        </Link>
                        <Link href="/contact" className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.8]">
                            Contact Us
                        </Link>
                        <Link href="/contact" className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.8]">
                            Find a store
                        </Link>
                        <Link href="/contact" className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.8]">
                            become a partner
                        </Link>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Shop
                            </div>
                            <Link href="/category/jordan" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Jordan
                            </Link>
                            <Link href="/category/sneakers" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sneakers
                            </Link>
                            <Link href="/category/running" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Running Shoes
                            </Link>
                            <Link href="/category/football" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Football Shoes
                            </Link>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                Customer Service
                            </div>
                            <Link href="/help/order-status" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </Link>
                            <Link href="/help/shipping-delivery" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Shipping & Delivery
                            </Link>
                            <Link href="/help/returns-exchanges" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns & Exchanges
                            </Link>
                            <Link href="/help/payment-options" className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </Link>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4 justify-center md:justify-start">
                        <div
                            onClick={() =>
                                window.open("https://facebook.com", "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </div>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <div
                            onClick={() =>
                                window.open("https://youtube.com", "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors"
                        >
                            <FaYoutube size={20} />
                        </div>
                        <div
                            onClick={() =>
                                window.open("https://instagram.com", "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer transition-colors"
                        >
                            <FaInstagram size={20} />
                        </div>
                    </div>

                    {/* Newsletter (Visual Only) */}
                    <div>
                        <p className="font-oswald font-medium uppercase text-sm mb-2 text-center md:text-left">Subscribe to our newsletter</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/[0.1] border border-white/[0.2] px-4 py-2 rounded-l-md text-sm text-white focus:outline-none w-full md:w-auto"
                            />
                            <button className="bg-white text-black px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-200 transition-colors">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 border-t border-white/[0.1] pt-6">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Shoe Store, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
