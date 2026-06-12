import React from "react";

const StripeUnavailable = () => {
    return (
        <div className="max-w-lg mx-auto mt-10 text-center">

            <h2 className="text-2xl font-bold text-red-600">
                Stripe Unavailable
            </h2>

            <p className="mt-4">
                Stripe payment is currently unavailable.
            </p>

            <p>
                Please select Cash On Delivery.
            </p>

        </div>
    );
};

export default StripeUnavailable;