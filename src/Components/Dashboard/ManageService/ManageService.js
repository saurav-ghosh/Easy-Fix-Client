import {} from "@fortawesome/free-brands-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://rocky-forest-31726.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const deleteService = (event, id) => {
        fetch(`https://rocky-forest-31726.herokuapp.com/deleteService/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("product deleted successfully");
                }
            });
    };

    return (
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="text-brand mt-3 ms-3">Manage Service</h4>
                <div className="mt-3 ms-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">
                                    Position
                                </th>
                                <th className="text-secondary" scope="col">
                                    Service Name
                                </th>
                                <th className="text-secondary" scope="col">
                                    Service Price
                                </th>
                                <th className="text-secondary" scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services &&
                                services.map((service, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{service.title}</td>
                                        <td>$ {service.price}</td>
                                        <td>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faTrashAlt}
                                                onClick={(event) =>
                                                    deleteService(
                                                        event,
                                                        service._id
                                                    )
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;
