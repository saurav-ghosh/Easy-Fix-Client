import React from "react";
import "./ClientReview.css";

const ClientReview = ({ review }) => {
    return (
        <div className="col-md-4">
            <div className="review-box">
                <div className="review-card d-flex mb-3">
                    <img
                        className="me-3"
                        src={`data:image/jpeg;base64,${review.image.img}`}
                        alt=""
                    />
                    <div className="client-detail">
                        <p>{review.name}</p>
                        <p>{review.position}</p>
                    </div>
                </div>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default ClientReview;
