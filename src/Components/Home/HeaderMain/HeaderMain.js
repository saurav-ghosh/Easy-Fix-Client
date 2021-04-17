import React from "react";
import mobileRepair from "../../../images/mobile-repair.jpg";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="header-desc">
                        <h1>
                            Our Solution For All Kind Of <br /> Hardware
                            Services
                        </h1>
                        <p className="text-secondary my-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Maiores tenetur delectus illum laboriosam
                            eius, vel reprehenderit fuga nam earum fugit.
                        </p>
                        <button className="button-green">Learn More</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="header-image" src={mobileRepair} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;
