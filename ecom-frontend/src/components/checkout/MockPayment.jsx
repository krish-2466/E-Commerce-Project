import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MockPayment = () => {

    const { selectedUserCheckoutAddress } = useSelector(
        (state) => state.auth
    );

    const handlePayment = async () => {

        const orderData = {
            addressId: selectedUserCheckoutAddress.addressId,
            pgName: "Mock Payment",
            pgPaymentId: "MOCK-" + Date.now(),
            pgStatus: "SUCCESS",
            pgResponseMessage: "Payment completed successfully"
        };

        console.log("Fake Payment Success");
        console.log(orderData);

        alert("Payment Successful!");
    };

    return (
        <div className="max-w-md mx-auto text-center mt-10">
            <h2 className="text-xl font-bold mb-4">
                Mock Payment Gateway
            </h2>

            <button
                onClick={handlePayment}
                className="bg-green-600 text-white px-6 py-3 rounded">
                Pay Now
            </button>
        </div>
    );
};

export default MockPayment;