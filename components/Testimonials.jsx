import React from "react";
import Wrapper from "./Wrapper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdStar } from "react-icons/io";

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

const Testimonials = () => {
    return (
        <div className="bg-gray-50 py-20 mt-10">
            <Wrapper>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-oswald uppercase mb-4">What Our Customers Say</h2>
                    <div className="w-20 h-1 bg-black mx-auto"></div>
                </div>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    containerClass="-mx-[10px]"
                    itemClass="px-[10px]"
                >
                    {/* Review 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <IoMdStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"These are hands down the most comfortable sneakers I've ever owned. The Jordan collection is fire!"</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                {/* Placeholder avatar logic or image */}
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500">JD</div>
                            </div>
                            <div>
                                <h4 className="font-bold font-oswald text-lg">John Doe</h4>
                                <p className="text-xs text-gray-500">Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <IoMdStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"Fast shipping and amazing quality. I ordered the football boots and they fit perfectly."</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500">AS</div>
                            </div>
                            <div>
                                <h4 className="font-bold font-oswald text-lg">Alex Smith</h4>
                                <p className="text-xs text-gray-500">Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <IoMdStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"The running shoes have completely changed my marathon training. Highly recommend!"</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500">SJ</div>
                            </div>
                            <div>
                                <h4 className="font-bold font-oswald text-lg">Sarah Jenkins</h4>
                                <p className="text-xs text-gray-500">Verified Buyer</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 4 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <IoMdStar key={i} />)}
                            </div>
                            <p className="text-gray-600 italic mb-6">"Great selection of styles. The website is so easy to use and the customer service is top notch."</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500">MP</div>
                            </div>
                            <div>
                                <h4 className="font-bold font-oswald text-lg">Mike Peters</h4>
                                <p className="text-xs text-gray-500">Verified Buyer</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </Wrapper>
        </div>
    );
};

export default Testimonials;
