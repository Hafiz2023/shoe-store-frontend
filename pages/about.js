import React from "react";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";

const About = () => {
    return (
        <div className="w-full md:py-20 min-h-screen bg-gray-50">
            <Head>
                <title>About Us | Shoe Store</title>
                <meta name="description" content="Learn more about Shoe Store, our mission, and our values." />
            </Head>

            <Wrapper>
                <div className="flex flex-col items-center max-w-[800px] mx-auto text-center md:mt-0 mb-10 pt-10 md:pt-0">
                    <div className="text-[34px] md:text-[50px] mb-4 font-bold leading-tight font-oswald uppercase text-black">
                        About Us
                    </div>
                    <div className="w-24 h-1 bg-black mx-auto mb-10"></div>
                </div>

                <div className="bg-white p-8 md:p-14 rounded-xl shadow-sm border border-gray-100 max-w-[1000px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                        <div className="relative h-[300px] w-full rounded-lg overflow-hidden bg-gray-200">
                            <Image
                                src="/slide-1.png"
                                alt="Our Story"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-bold font-oswald mb-4">Our Story</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded in 2023, Shoe Store has established itself as the premier destination for sneaker enthusiasts and athletes alike. What started as a small passion project has grown into a global community connected by the love of footwear.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that the right pair of shoes can change your day, your game, and even your life. That's why we obsess over every detail, ensuring we bring you only the best from top brands like Nike, Jordan, and more.
                            </p>
                        </div>
                    </div>

                    <div className="text-left mb-10">
                        <h3 className="text-2xl font-bold font-oswald mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To inspire and innovate for every athlete in the world. If you have a body, you are an athlete. We strive to bring you the cutting-edge technology and style that helps you perform at your best, whether you're running a marathon or just running errands.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-xl mb-2 font-oswald">Authenticity</h4>
                            <p className="text-sm text-gray-500">100% Authentic products guaranteed.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-xl mb-2 font-oswald">Quality</h4>
                            <p className="text-sm text-gray-500">Premium materials and craftsmanship.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h4 className="font-bold text-xl mb-2 font-oswald">Community</h4>
                            <p className="text-sm text-gray-500">Connecting sneakerheads worldwide.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default About;
