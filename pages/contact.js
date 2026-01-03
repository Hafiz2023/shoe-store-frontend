import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate generic API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="w-full md:py-20 min-h-screen bg-gray-50">
            <Head>
                <title>Contact Us | Shoe Store</title>
                <meta name="description" content="Get in touch with our support team." />
            </Head>

            <Wrapper>
                <div className="flex flex-col items-center max-w-[800px] mx-auto text-center md:mt-0 mb-10 pt-10 md:pt-0">
                    <div className="text-[34px] md:text-[50px] mb-4 font-bold leading-tight font-oswald uppercase text-black">
                        Contact Us
                    </div>
                    <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-[500px]">
                        Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Contact Info Sidebar */}
                    <div className="bg-black text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-oswald mb-6 uppercase">Get In Touch</h3>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <FaPhoneAlt size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="text-gray-300 text-sm mt-1">+1 (555) 123-4567</p>
                                        <p className="text-gray-400 text-xs">Mon-Fri 9am-6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <FaEnvelope size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <p className="text-gray-300 text-sm mt-1">support@shoestore.com</p>
                                        <p className="text-gray-400 text-xs">Online Support 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <FaMapMarkerAlt size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Headquarters</h4>
                                        <p className="text-gray-300 text-sm mt-1">123 Sneaker Street,<br />New York, NY 10012</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
                        <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl z-0"></div>
                    </div>

                    {/* Form */}
                    <div className="p-10">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                                <h3 className="text-2xl font-bold font-oswald mb-2">Message Sent!</h3>
                                <p className="text-gray-500">Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="mt-6 text-sm font-bold underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase text-gray-800">First Name</label>
                                        <input required className="bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="John" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold uppercase text-gray-800">Last Name</label>
                                        <input required className="bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold uppercase text-gray-800">Email Address</label>
                                    <input required type="email" className="bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold uppercase text-gray-800">Message</label>
                                    <textarea required rows={4} className="bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button
                                    disabled={status === "submitting"}
                                    className="bg-black text-white py-4 rounded-full font-oswald text-lg font-medium hover:bg-gray-800 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Contact;
