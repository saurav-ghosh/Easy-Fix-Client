import {
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = () => {
    const ourAddress = [{ name: "Menlo Park, California, United States" }];
    const company = [
        { name: "About", link: "/emergency" },
        { name: "Works", link: "/Works" },
        { name: "Our team", link: "/ourteam" },
        { name: "Terms and condition", link: "/termsandcon" },
        { name: "Faqs", link: "/Faqs" },
    ];
    const quickLinks = [
        { name: "Sales", link: "/Sales" },
        { name: "Contact", link: "/Contact" },
        { name: "Blog", link: "/Blog" },
        { name: "Quick Links", link: "/quickLinks" },
        { name: "services", link: "/Services" },
    ];
    const aboutUs = [
        {
            name:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aut maxime officiis. Ea, possimus.",
            link: "/emergency",
        },
    ];

    return (
        <footer className="footer-area clear-both pt-5">
            <div className="container">
                <div className="row">
                    <FooterCol key={1} menuTitle={" "} menuItems={ourAddress} />
                    <FooterCol
                        key={2}
                        menuTitle="Company"
                        menuItems={company}
                    />
                    <FooterCol
                        key={3}
                        menuTitle="Quick Links"
                        menuItems={quickLinks}
                    />
                    <FooterCol key={4} menuTitle="About Us" menuItems={aboutUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faFacebookSquare}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faInstagramSquare}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faLinkedin}
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faYoutubeSquare}
                                    />
                                </a>
                            </li>
                        </ul>
                    </FooterCol>
                </div>
                <p className="text-center py-3">
                    {" "}
                    &copy; Copyright EasyFix {new Date().getFullYear()}.{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
