import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Newsletter = () => {
    return (
        <div className="relative w-full py-20 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <Image src="/slide-1.png" alt="Background" fill className="object-cover" />
            </div>
            <Wrapper className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-oswald uppercase mb-4">Join The Club</h2>
                <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg">
                    Sign up for our newsletter and get exclusive access to new drops, special offers, and community events.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-white/10 border border-white/20 px-6 py-4 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    />
                    <button className="bg-white text-black px-8 py-4 font-oswald uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors">
                        Subscribe
                    </button>
                </div>
            </Wrapper>
        </div>
    );
};

export default Newsletter;
