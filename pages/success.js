import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
    const router = useRouter();
    const { orderId } = router.query;

    return (
        <div className="min-h-[80vh] flex items-center bg-gray-50 py-20">
            <Wrapper>
                <div className="max-w-[600px] bg-white rounded-xl p-10 shadow-lg border border-gray-100 mx-auto flex flex-col items-center text-center">
                    <div className="text-green-500 mb-6">
                        <FaCheckCircle size={80} />
                    </div>

                    <div className="text-3xl font-bold font-oswald uppercase mb-2">
                        Thanks for shopping!
                    </div>
                    <div className="text-lg text-gray-600 mb-8">
                        Your order has been placed successfully.
                    </div>

                    {orderId && (
                        <div className="bg-gray-100 px-6 py-4 rounded-lg mb-8 w-full max-w-sm">
                            <p className="text-sm text-gray-500 uppercase font-bold mb-1">Order ID</p>
                            <p className="text-2xl font-mono font-bold tracking-wider">{orderId}</p>
                        </div>
                    )}

                    <div className="text-base text-gray-500 mb-2">
                        For any product related query, drop an email to
                    </div>
                    <div className="font-bold text-black mb-10">support@shoestore.com</div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <Link href="/" className="flex-1 py-4 rounded-full border-2 border-black text-black font-oswald font-bold uppercase transition-colors hover:bg-gray-100">
                            Continue Shopping
                        </Link>
                        <Link href="/help/order-status" className="flex-1 py-4 rounded-full bg-black text-white font-oswald font-bold uppercase transition-transform active:scale-95 hover:opacity-90">
                            Track Order
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
