import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./Components/Dashboard/AddService/AddService";
import Admin from "./Components/Dashboard/Admin/Admin";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import Orders from "./Components/Dashboard/Orders/Orders";
import Review from "./Components/Dashboard/Review/Review";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <PrivateRoute path="/addService">
                        <AddService></AddService>
                    </PrivateRoute>
                    <PrivateRoute path="/bookingList">
                        <BookingList></BookingList>
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute path="/orderList">
                        <Orders></Orders>
                    </PrivateRoute>
                    <PrivateRoute path="/makeAdmin">
                        <Admin></Admin>
                    </PrivateRoute>
                    <PrivateRoute path="/manageService">
                        <ManageService></ManageService>
                    </PrivateRoute>
                    <PrivateRoute path="/service/:serviceId">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
