import firebase from "firebase/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import logo from "../../images/logo.png";
import firebaseConfig from "./Firebase.config";
import "./Login.css";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, email } = result.user;
                const newUserInfo = { name: displayName, email };
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };
    return (
        <div>
            <div className="text-center mt-5">
                <Link class="navbar-brand" to="/home">
                    <img style={{ width: "40px" }} src={logo} alt="" />{" "}
                    <span className="text-brand">EasyFix</span>
                </Link>
            </div>
            <div className="text-center mt-5">
                <h3 className="mb-3">Login With</h3>
                <button onClick={handleGoogleSignIn} className="button-login">
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
