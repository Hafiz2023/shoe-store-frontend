import React from "react";
import Wrapper from "./Wrapper";
import { FaShippingFast, FaRedo, FaLock, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div className="bg-gray-100 py-10 md:py-16 border-b border-gray-200">
            <Wrapper>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm text-2xl">
                            <FaShippingFast />
                        </div>
                        <h3 className="font-oswald text-lg uppercase font-bold mb-2">Free Shipping</h3>
                        <p className="text-gray-500 text-sm">On all orders over $150</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm text-2xl">
                            <FaRedo />
                        </div>
                        <h3 className="font-oswald text-lg uppercase font-bold mb-2">Easy Returns</h3>
                        <p className="text-gray-500 text-sm">30 days money back guarantee</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm text-2xl">
                            <FaLock />
                        </div>
                        <h3 className="font-oswald text-lg uppercase font-bold mb-2">Secure Payment</h3>
                        <p className="text-gray-500 text-sm">100% secure payment</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-4 shadow-sm text-2xl">
                            <FaHeadset />
                        </div>
                        <h3 className="font-oswald text-lg uppercase font-bold mb-2">24/7 Support</h3>
                        <p className="text-gray-500 text-sm">Dedicated support team</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default WhyChooseUs;
