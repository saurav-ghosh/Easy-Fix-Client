import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://rocky-forest-31726.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <section className="container my-5">
            <h2 className="text-center text-brand">Services We Provide</h2>
            <p className="text-center text-secondary">
                We provide a first and reliable services. so, why are you
                waiting ? take our services
            </p>
            <div className="row mt-5">
                {services.map((service) => (
                    <Service service={service}></Service>
                ))}
            </div>
        </section>
    );
};

export default Services;
