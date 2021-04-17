import React from "react";
import "./TeamMember.css";

const TeamMember = ({ member }) => {
    return (
        <div className="col-md-3">
            <div className="team-card text-center">
                <img src={member.img} alt="" />
                <div className="mt-3">
                    <h4 className="my-3 text-brand2">{member.name}</h4>
                    <span> - {member.title}</span>
                </div>
                <p>Experience of {member.experience}</p>
            </div>
        </div>
    );
};

export default TeamMember;
