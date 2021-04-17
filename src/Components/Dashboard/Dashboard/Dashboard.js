import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { userContext } from "../../../App";
import Orders from "../Orders/Orders";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { serviceId } = useParams();
    const [selectedService, setSelectedService] = useState({});
    useEffect(() => {
        fetch(`https://rocky-forest-31726.herokuapp.com/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setSelectedService(data));
    }, [serviceId]);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("https://rocky-forest-31726.herokuapp.com/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, [loggedInUser.email]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.serviceDetail = selectedService;
        data.status = "pending";
        fetch("https://rocky-forest-31726.herokuapp.com/bookService", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Your service is booked successfully");
                }
            });
    };

    return (
        <>
            {isAdmin ? (
                <Orders></Orders>
            ) : (
                <div className="row container-fluid w-100">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <h2 className="mt-3 ms-3 text-brand">Book</h2>
                        <div className="booking-form ms-3 mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control"
                                    placeholder="your name"
                                    name="name"
                                    defaultValue={loggedInUser.name}
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <span className="text-danger">
                                        name is required
                                    </span>
                                )}{" "}
                                <br />
                                <input
                                    className="form-control"
                                    placeholder="your email"
                                    name="email"
                                    defaultValue={loggedInUser.email}
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="text-danger">
                                        email is required
                                    </span>
                                )}
                                <br />
                                <input
                                    className="form-control"
                                    placeholder="service name"
                                    name="name"
                                    defaultValue={selectedService.title}
                                    {...register("serviceName", {
                                        required: true,
                                    })}
                                />
                                {errors.serviceName && (
                                    <span className="text-danger">
                                        service name is required
                                    </span>
                                )}
                                <br />
                                <p className="text-brand2">Pay With Card</p>
                                <ProcessPayment></ProcessPayment>
                                <br />
                                <p>
                                    Your service charge will be $
                                    {selectedService.price}{" "}
                                </p>
                                <button className="button-green" type="submit">
                                    Pay
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
