import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(
            "https://rocky-forest-31726.herokuapp.com/bookings?email=" +
                loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [loggedInUser.email]);
    return (
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className="mt-3 ms-3 text-brand">
                    You have {bookings.length} Booking
                </h4>
                <div className="ms-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">
                                    Position
                                </th>
                                <th className="text-secondary" scope="col">
                                    Service title
                                </th>
                                <th className="text-secondary" scope="col">
                                    Service Charge
                                </th>
                                <th className="text-secondary" scope="col">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings &&
                                bookings.map((booking, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking.serviceName}</td>
                                        <td>$ {booking.serviceDetail.price}</td>
                                        <td>{booking.status}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
