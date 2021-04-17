import React from "react";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LatestWorks from "../LatestWorks/LatestWorks";
import Services from "../Services/Services";
import TeamMembers from "../TeamMembers/TeamMembers";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <LatestWorks></LatestWorks>
            <TeamMembers></TeamMembers>
            <ClientReviews></ClientReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
