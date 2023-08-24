import React from "react";

import "../Css/Contact.css";

import FooterPage from "./Footer";
import ContactForm from "./Form";

export default function ContactPage() {
    return (
        <div className="main-container">
            <div className="main-title-item">
                <h1 className="title-item-cont">Skontaktuj się z nami !</h1>
            </div>
            <div className="main-txt">
                <div className="main-list">
                    <ul>
                        <li className="list-item">+48 669 324 549</li>
                        <li className="list-item"> Kraków - Rybitwy</li>
                        <li className="list-item">30-772 Kraków</li>
                        <li className="list-item"> carfindfactory@gmail.com</li>
                        <li className="list-item"></li>
                    </ul>
                </div>
                <ContactForm />

            </div>

            <FooterPage />
        </div>
    )
}