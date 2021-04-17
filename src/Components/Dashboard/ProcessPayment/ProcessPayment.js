import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe(
    "pk_test_51Ie2eyImSMFnxG7aM9zNQcoARVRfxNSEyZUygm0eslGKeIVt2p3v2MNGTCJvW76bQ0HxGFniVULIkzh7WUMU4QEF00RiByh35o"
);

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
        </Elements>
    );
};

export default ProcessPayment;
