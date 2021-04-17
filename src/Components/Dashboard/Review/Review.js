import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("name", data.name);
        formData.append("position", data.position);
        formData.append("description", data.description);

        fetch("https://rocky-forest-31726.herokuapp.com/addReview", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    alert("Thank you for your review !!");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="mt-3 ms-3 text-brand2">Review</h4>
                <div style={{ width: "500px" }} className="mt-3 ms-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control"
                            placeholder="your name"
                            name="name"
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
                            placeholder="your position"
                            name="position"
                            {...register("position", { required: true })}
                        />
                        {errors.position && (
                            <span className="text-danger">
                                position is required
                            </span>
                        )}
                        <br />
                        <input
                            className="form-control"
                            placeholder="description"
                            name="description"
                            {...register("description", { required: true })}
                        />
                        {errors.description && (
                            <span className="text-danger">
                                description is required
                            </span>
                        )}
                        <br />
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            {...register("file", { required: true })}
                        />
                        <br />
                        <button className="button-green" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
