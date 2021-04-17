import React from "react";
import davidwilson from "../../../images/david wilson.jpg";
import emawatson from "../../../images/ema watson.jpg";
import jarranim from "../../../images/jarra nim.jpg";
import Johndoe from "../../../images/Johndoe.jpg";
import TeamMember from "../TeamMember/TeamMember";

const TeamMembers = () => {
    const members = [
        {
            name: "John Doe",
            img: Johndoe,
            title: "mobile expert",
            experience: "3 years",
        },
        {
            name: "David Wilson",
            img: davidwilson,
            title: "computer expert",
            experience: "4 years",
        },
        {
            name: "Ema Watson",
            img: emawatson,
            title: "mobile expert",
            experience: "2 years",
        },
        {
            name: "Jarra Nim",
            img: jarranim,
            title: "tv expert",
            experience: "3 years",
        },
    ];

    return (
        <section className="container mt-5">
            <h2 className="text-center text-brand">Our Team Members</h2>
            <p className="text-center text-secondary">
                meet our experienced team members..
            </p>
            <div className="row mt-5">
                {members.map((member) => (
                    <TeamMember member={member}></TeamMember>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;
