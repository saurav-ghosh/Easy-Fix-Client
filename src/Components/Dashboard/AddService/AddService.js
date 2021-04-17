import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import "./AddService.css";

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);

        fetch("https://rocky-forest-31726.herokuapp.com/addService", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    alert("new service uploaded successfully");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="row container-fluid w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h2 className="text-brand2 mt-3">Add Service</h2>
                <div className="add-service-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title">Service title</label>
                        <input
                            className="form-control"
                            placeholder="Enter title"
                            name="title"
                            {...register("title", { required: true })}
                        />
                        {errors.title && (
                            <span className="text-danger">
                                title is required
                            </span>
                        )}{" "}
                        <br />
                        <label htmlFor="description">Description</label>
                        <input
                            className="form-control"
                            placeholder="Enter title"
                            name="description"
                            {...register("description", { required: true })}
                        />
                        {errors.description && (
                            <span className="text-danger">
                                description is required
                            </span>
                        )}
                        <br />
                        <label htmlFor="price">Add Price</label>
                        <input
                            className="form-control"
                            placeholder="Enter price"
                            name="price"
                            {...register("price", { required: true })}
                        />
                        {errors.price && (
                            <span className="text-danger">
                                price is required
                            </span>
                        )}
                        <br />
                        <label htmlFor="image">Upload image</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            {...register("file", { required: true })}
                        />
                        <br />
                        <input className="button-green" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
