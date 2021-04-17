import React from "react";

const LatestWork = ({ work }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="work-card">
                <img src={work.img} alt="" />
                <h4 className="my-3 text-brand">{work.title}</h4>
                <p className="text-secondary">{work.status}</p>
            </div>
        </div>
    );
};

export default LatestWork;
