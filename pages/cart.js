import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "@/store/cartSlice";
import { useRouter } from "next/router";

// import { makePaymentRequest } from "@/utils/api";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const handleCheckout = async () => {
        setLoading(true);

        // Simulating API/Processing Delay
        setTimeout(() => {
            const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
            const newOrder = {
                id: orderId,
                date: new Date().toISOString(),
                items: cartItems,
                total: subTotal,
                status: "Processing"
            };

            // Save to LocalStorage (Simulating Database)
            const existingOrders = JSON.parse(localStorage.getItem("shoeStoreOrders") || "[]");
            existingOrders.unshift(newOrder); // Add to top
            localStorage.setItem("shoeStoreOrders", JSON.stringify(existingOrders));

            // Clear Cart
            dispatch(resetCart());

            setLoading(false);
            // Redirect to success page
            router.push(`/success?orderId=${orderId}`);
        }, 2000);
    };

    return (
        <div className="w-full md:py-20 min-h-screen bg-gray-50">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 mb-10">
                            <div className="text-[28px] md:text-[40px] mb-2 font-bold leading-tight font-oswald uppercase">
                                Your Shopping Bag
                            </div>
                            <div className="text-black/[0.6]">
                                <span className="font-bold text-black">{cartItems.length}</span> items in your bag
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
                            {/* CART ITEMS START */}
                            <div className="flex-[2] bg-white rounded-xl shadow-sm p-6 md:p-8">
                                <div className="text-xl font-bold font-oswald mb-6 pb-4 border-b flex justify-between items-center">
                                    <span>Cart Items</span>
                                    <span className="text-sm font-sans font-normal text-gray-500">Prices are inclusive of taxes</span>
                                </div>
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} data={item} />
                                    ))}
                                </div>
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 sticky top-[100px]">
                                    <div className="text-xl font-bold font-oswald mb-6 uppercase">Order Summary</div>

                                    <div className="flex justify-between mb-4">
                                        <div className="uppercase text-md md:text-lg font-medium text-black/[0.8]">
                                            Subtotal
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            &#8377;{subTotal.toLocaleString()}
                                        </div>
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="uppercase text-md md:text-lg font-medium text-black/[0.8]">
                                            Estimated Delivery
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-green-600">
                                            Free
                                        </div>
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="uppercase text-md md:text-lg font-medium text-black/[0.8]">
                                            Sales Tax (Simulated)
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            -
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 my-4"></div>

                                    <div className="flex justify-between mb-6">
                                        <div className="uppercase text-lg md:text-xl font-bold text-black">
                                            Total
                                        </div>
                                        <div className="text-lg md:text-xl font-bold text-black">
                                            &#8377;{subTotal.toLocaleString()}
                                        </div>
                                    </div>

                                    {/* PROMO CODE */}
                                    <div className="mb-6">
                                        <label className="text-xs font-bold uppercase text-black/[0.5] mb-2 block">Promo Code</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-black"
                                                placeholder="Enter code"
                                            />
                                            <button className="bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-gray-300">Apply</button>
                                        </div>
                                    </div>

                                    <p className="text-sm text-black/[0.5] mb-6 leading-relaxed">
                                        The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts.
                                    </p>

                                    {/* BUTTON START */}
                                    <button
                                        className="w-full py-4 rounded-full bg-black text-white text-lg font-bold font-oswald tracking-wide transition-all active:scale-95 hover:bg-gray-800 flex items-center gap-2 justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                        onClick={handleCheckout}
                                        disabled={loading}
                                    >
                                        {loading ? "Processing..." : "Secure Checkout"}
                                        {loading && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                                    </button>
                                    {/* BUTTON END */}

                                    <div className="mt-6 flex flex-col gap-2">
                                        <p className="text-xs font-bold uppercase text-black/[0.5] text-center mb-2">We Accept</p>
                                        <div className="flex gap-3 justify-center items-center opacity-60">
                                            {/* Simple CSS placeholders for card icons */}
                                            <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">VISA</div>
                                            <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">MC</div>
                                            <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">AMEX</div>
                                            <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">PAYPAL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 min-h-[60vh] justify-center text-center">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            alt="Empty Cart"
                            className="w-[300px] md:w-[400px] mb-8 opacity-80"
                        />
                        <span className="text-2xl font-bold font-oswald mb-4 uppercase">
                            Your Bag is Empty
                        </span>
                        <span className="text-center text-black/[0.6] max-w-[400px] mb-8 leading-relaxed">
                            Looks like you have not added anything in your bag.
                            Go ahead and explore top categories to find your perfect fit.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-10 rounded-full bg-black text-white text-lg font-bold font-oswald uppercase tracking-wide transition-transform active:scale-95 hover:shadow-lg"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Cart;
