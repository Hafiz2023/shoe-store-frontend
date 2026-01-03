import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaShippingFast, FaBoxOpen, FaCreditCard, FaQuestionCircle, FaSearch } from "react-icons/fa";

const OrderStatusTool = () => {
    const [orderId, setOrderId] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleTrack = () => {
        setError("");
        setResult(null);

        if (!orderId) {
            setError("Please enter an Order ID");
            return;
        }

        const orders = JSON.parse(localStorage.getItem("shoeStoreOrders") || "[]");
        const foundOrder = orders.find(o => o.id === orderId);

        if (foundOrder) {
            setResult(foundOrder);
        } else {
            setError("Order not found. Please check your Order ID.");
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <p>To check the status of your order, please enter your Order ID in the tracking tool below.</p>
            <div className="bg-gray-100 p-8 rounded-lg max-w-md w-full">
                <div className="flex flex-col gap-4">
                    <input
                        className="p-3 border rounded focus:outline-none focus:border-black"
                        placeholder="Order ID (e.g. ORD-123456)"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                    />
                    <input
                        className="p-3 border rounded focus:outline-none focus:border-black"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        onClick={handleTrack}
                        className="bg-black text-white py-3 rounded font-oswald uppercase hover:opacity-90 flex justify-center items-center gap-2"
                    >
                        <FaSearch size={14} /> Track Order
                    </button>
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
                    {error}
                </div>
            )}

            {result && (
                <div className="mt-4 p-6 bg-green-50 rounded-lg border border-green-100 animate-fade-in">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <FaBoxOpen /> Order Found: {result.id}
                    </h3>
                    <div className="space-y-2">
                        <div className="flex justify-between border-b border-green-200 pb-2">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-bold text-green-700 uppercase">{result.status || "Processing"}</span>
                        </div>
                        <div className="flex justify-between border-b border-green-200 pb-2">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{new Date(result.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-green-200 pb-2">
                            <span className="text-gray-600">Total:</span>
                            <span className="font-bold">&#8377;{result.total?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Items:</span>
                            <span className="font-medium">{result.items?.length} items</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const helpData = {
    "order-status": {
        title: "Order Status",
        icon: <FaBoxOpen size={40} />,
        component: <OrderStatusTool />
    },
    "shipping-delivery": {
        title: "Shipping & Delivery",
        icon: <FaShippingFast size={40} />,
        component: (
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold">Standard Shipping</h3>
                <p>We offer standard shipping on all orders. Deliveries typically arrive within 3-5 business days. Free shipping is available for all orders over $150.</p>

                <h3 className="text-xl font-bold mt-4">Express Delivery</h3>
                <p>Need it faster? Opt for Express Delivery at checkout to receive your items within 1-2 business days for an additional fee.</p>

                <h3 className="text-xl font-bold mt-4">International Shipping</h3>
                <p>We currently ship to select countries worldwide. International shipping times vary between 7-14 business days depending on the destination.</p>
            </div>
        )
    },
    "returns-exchanges": {
        title: "Returns & Exchanges",
        icon: <FaBoxOpen size={40} />,
        component: (
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold">Our Return Policy</h3>
                <p>We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns within 30 days of delivery.</p>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Items must be unworn and in original condition.</li>
                    <li>Original packaging and tags must be intact.</li>
                    <li>Refunds are processed to the original payment method.</li>
                </ul>

                <h3 className="text-xl font-bold mt-4">How to Return</h3>
                <p>To initiate a return, please visit your account dashboard or contact our customer support team.</p>
            </div>
        )
    },
    "payment-options": {
        title: "Payment Options",
        icon: <FaCreditCard size={40} />,
        component: (
            <div className="flex flex-col gap-6">
                <p>We accept a variety of payment methods to make your checkout process smooth and secure.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="p-4 border rounded flex items-center justify-center font-bold text-gray-700 bg-gray-50">Visa</div>
                    <div className="p-4 border rounded flex items-center justify-center font-bold text-gray-700 bg-gray-50">Mastercard</div>
                    <div className="p-4 border rounded flex items-center justify-center font-bold text-gray-700 bg-gray-50">PayPal</div>
                    <div className="p-4 border rounded flex items-center justify-center font-bold text-gray-700 bg-gray-50">Apple Pay</div>
                </div>

                <p className="mt-4">All transactions are encrypted and secure. We do not store your full card details.</p>
            </div>
        )
    }
};

const HelpPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) return <div className="min-h-screen"></div>;

    const data = helpData[slug] || {
        title: "Help Center",
        icon: <FaQuestionCircle size={40} />,
        component: <p>Page not found. Please contact support.</p>
    };

    return (
        <div className="w-full md:py-20 min-h-screen bg-gray-50">
            <Head>
                <title>{`${data.title} | Shoe Store`}</title>
            </Head>

            <Wrapper>
                <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto gap-10">
                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                            <h3 className="font-oswald font-bold text-lg mb-4 uppercase border-b pb-2">Help Topics</h3>
                            <ul className="flex flex-col gap-3">
                                {Object.keys(helpData).map((key) => (
                                    <li key={key}>
                                        <Link
                                            href={`/help/${key}`}
                                            className={`text-sm hover:text-black transition-colors ${slug === key ? 'font-bold text-black' : 'text-gray-500'}`}
                                        >
                                            {helpData[key].title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 min-h-[500px]">
                            <div className="flex items-center gap-4 mb-8 border-b pb-6">
                                <div className="text-gray-900">
                                    {data.icon}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold font-oswald uppercase">
                                    {data.title}
                                </h1>
                            </div>

                            <div className="text-gray-600 leading-relaxed text-lg">
                                {data.component}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default HelpPage;
