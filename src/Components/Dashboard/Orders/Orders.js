import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://rocky-forest-31726.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleStatus = (event, id) => {
        const status = event.target.value;
        const newStatus = { id, status };
        fetch(`https://rocky-forest-31726.herokuapp.com/updateStatus/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newStatus),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert("Booking Status updated successfully");
                }
            });
    };

    return (
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="text-brand mt-3 ms-3">Orders List</h4>
                <div className="mt-3 ms-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">
                                    Position
                                </th>
                                <th className="text-secondary" scope="col">
                                    Email ID
                                </th>
                                <th className="text-secondary" scope="col">
                                    Service Title
                                </th>
                                <th className="text-secondary" scope="col">
                                    Pay With
                                </th>
                                <th className="text-secondary" scope="col">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders.map((order, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.email}</td>
                                        <td>{order.serviceName}</td>
                                        <td>Card</td>
                                        <td>
                                            <input
                                                onClick={(event) =>
                                                    handleStatus(
                                                        event,
                                                        order._id
                                                    )
                                                }
                                                className="pending"
                                                value="pending"
                                                type="submit"
                                            />
                                            <input
                                                onClick={(event) =>
                                                    handleStatus(
                                                        event,
                                                        order._id
                                                    )
                                                }
                                                className="onGoing"
                                                value="on going"
                                                type="submit"
                                            />
                                            <input
                                                onClick={(event) =>
                                                    handleStatus(
                                                        event,
                                                        order._id
                                                    )
                                                }
                                                className="done"
                                                value="done"
                                                type="submit"
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

export default Orders;
