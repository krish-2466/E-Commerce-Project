import React from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CashOnDelivery = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectedUserCheckoutAddress } =
        useSelector((state) => state.auth);

    const handlePlaceOrder = async () => {
        try {
            const sendData = {
                addressId: selectedUserCheckoutAddress.addressId,
                paymentMethod: "Cash On Delivery",
                pgName: "Cash On Delivery",
                pgPaymentId: "COD-" + Date.now(),
                pgStatus: "SUCCESS",
                pgResponseMessage: "Order placed with Cash On Delivery"
            };

            console.log("Sending Data:", sendData);

            await api.post(
                "/order/users/payments/CashOnDelivery",
                sendData
            );

            // Clear Redux Cart
            dispatch({
                type: "CLEAR_CART"
            });

            // Clear local storage
            localStorage.removeItem("CHECKOUT_ADDRESS");
            localStorage.removeItem("cartItems");
            localStorage.removeItem("client-secret");

            toast.success("Order Placed Successfully!");

            navigate("/");
        } catch (error) {
            console.log("FULL ERROR:", error);
            console.log("RESPONSE:", error.response);
            console.log("DATA:", error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Failed to place order"
            );
        }
    };

    return (
        <div className="max-w-lg mx-auto text-center mt-10">
            <h2 className="text-2xl font-bold mb-4">
                Cash On Delivery
            </h2>

            <p className="mb-6">
                Pay when your order arrives.
            </p>

            <button
                onClick={handlePlaceOrder}
                className="bg-green-600 text-white px-6 py-3 rounded"
            >
                Place Order
            </button>
        </div>
    );
};

export default CashOnDelivery;