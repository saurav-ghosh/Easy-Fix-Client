import React, { useEffect, useState } from "react";
import ClientReview from "../ClientReview/ClientReview";
import "./ClientReviews.css";

const ClientReviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch("https://rocky-forest-31726.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className=" testimonial">
            <div className="container">
                <h2 className="text-center text-brand2 mt-5">
                    What Client Are Says
                </h2>
                <div className="row mt-5">
                    {reviews &&
                        reviews.map((review) => (
                            <ClientReview review={review}></ClientReview>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
