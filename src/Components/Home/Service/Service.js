import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="service-card">
                <img
                    src={`data:image/jpeg;base64,${service.image.img}`}
                    alt=""
                />
                <h4 className="my-3 text-brand2">{service.title}</h4>
                <h4 className="text-brand">${service.price}</h4>
                <p className="text-secondary">{service.description}</p>
                <Link to={"/service/" + service._id}>
                    <button className="button-green">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
