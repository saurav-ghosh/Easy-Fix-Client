import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://rocky-forest-31726.herokuapp.com/makeAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Admin added successfully");
                }
            });
    };

    return (
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="text-brand2 mt-3 ms-3">Make Admin</h4>
                <div style={{ width: "500px" }} className="mt-3 ms-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title">Admin Email: </label>
                        <input
                            className="form-control"
                            placeholder="Enter admin email"
                            name="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-danger">
                                email is required
                            </span>
                        )}{" "}
                        <br />
                        <button className="button-green" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
