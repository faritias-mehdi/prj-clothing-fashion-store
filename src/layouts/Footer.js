
import React from "react";
import q1 from "../assets/images/q1.png";
import q2 from "../assets/images/q2.png";
import q3 from "../assets/images/q3.png";
import q4 from "../assets/images/q4.png";
import q5 from "../assets/images/q5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <div className="parag-4">
                                <div >

                                    <h4 className="parag-5">GET IN TOUCH</h4>
                                    <p className="parag-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nihil a in, perferendis nobis modi.</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center gap-1">
                                <FontAwesomeIcon icon={faFacebook} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} />
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000", }} />
                            </div>



                        </div>
                        <div className="footer-col mt-2">
                            <h4> LINKS </h4>
                            <ul>
                                <li><a href="/">Contactez-nous</a></li>
                                <li><a href="/">Retours</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="footer-col mt-2">
                            <h4> LINKS</h4>
                            <ul>
                                <li><a href="/">Femmes</a></li>
                                <li><a href="/">Hommes</a></li>
                                <li><a href="/">Enfants</a></li>
                                <li><a href="/">Accessoires</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="footer-bottom-text">© 2023 Votre boutique en ligne. Tous droits réservés.</p>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
                <img src={q4} alt="" />
                <img src={q5} alt="" />
            </footer>

        </>
    );
};



