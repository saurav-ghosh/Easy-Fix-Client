import {
    faCommentAlt,
    faList,
    faListAlt,
    faPlusSquare,
    faShoppingCart,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
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

    return (
        <div className="col-md-2 sidebar">
            <div className="dashboard-logo">
                <Link class="navbar-brand" to="/home">
                    <img style={{ width: "30px" }} src={logo} alt="" />{" "}
                    <span className="shop-name">EasyFix</span>
                </Link>
            </div>
            <ul className="list-unstyled mt-5 ms-3">
                {isAdmin ? (
                    <div className="admin-sidebar">
                        <Link className="nav-link" to="/orderList">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faListAlt} /> Order List
                            </li>
                        </Link>
                        <Link className="nav-link" to="/addService">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faPlusSquare} /> Add
                                Service
                            </li>
                        </Link>
                        <Link className="nav-link" to="/makeAdmin">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </li>
                        </Link>
                        <Link className="nav-link" to="/manageService">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faList} /> Manage
                                Services
                            </li>
                        </Link>
                    </div>
                ) : (
                    <div className="user">
                        <Link className="nav-link" to="/home">
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart} /> Book
                            </li>
                        </Link>
                        <Link className="nav-link" to="/bookingList">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faListAlt} /> Booking
                                List
                            </li>
                        </Link>
                        <Link className="nav-link" to="/review">
                            <li>
                                {" "}
                                <FontAwesomeIcon icon={faCommentAlt} /> Review
                            </li>
                        </Link>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
