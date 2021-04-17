import React from "react";
import laptopheat from "../../../images/laptopheating.png";
import mobile2 from "../../../images/mobile2.jpg";
import sonytv from "../../../images/sonytv.jpg";
import LatestWork from "../LatestWork/LatestWork";

const LatestWorks = () => {
    const workData = [
        {
            title: "Mobile sensor is not working",
            img: mobile2,
            status: "solved within 3 hrs",
        },
        {
            title: "Laptop temperature problem ",
            img: laptopheat,
            status: "solved within 5 hrs",
        },
        {
            title: "52inch sony tv color problem",
            img: sonytv,
            status: "solved within 1 day",
        },
    ];

    return (
        <section className="container">
            <h2 class="text-center text-brand2">Our Latest Work</h2>
            <p className="text-center text-secondary">
                Our all latest works are given below. Please take a look !!
            </p>
            <div className="row mt-5">
                {workData.map((work) => (
                    <LatestWork work={work}></LatestWork>
                ))}
            </div>
            <div className="text-center mt-5">
                <button className="button-green">Explore More</button>
            </div>
        </section>
    );
};

export default LatestWorks;
