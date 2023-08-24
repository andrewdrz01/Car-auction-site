import React from "react";

import "./AppBlog.css"

import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from "./Components/Home";
import ContactPage from "./Components/Contact";
import AboutPage from "./Components/About";
import CarsPage from "./Components/Cars";
import CarsSportPage from "./Slider/SliderSportCars/MainSport";
import CarsLuxuryPage from "./Slider/SliderLuxury/MainLuxury";
import FaqPage from "./Components/Faq";

export default function AppTest() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/contacts');
    };

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    const navigateToAbout = () => {
        // 👇️ navigate to /about
        navigate('/about');
    };

    const navigateToCarsClassic = () => {
        // 👇️ navigate to /about
        navigate('/carsclassic');
    };

    const navigateToCarsSport = () => {
        // 👇️ navigate to /about
        navigate('/carssport');
    };

    const navigateToCarsLuxury = () => {
        // 👇️ navigate to /about
        navigate('/carsluxury');
    };

    const navigateToFaq = () => {
        // 👇️ navigate to /about
        navigate('/faq');
    };

    return (
        <div>
            <div className="main-container-btn">

                <button className="main-item-btn" onClick={() => navigate('/')}>Home</button>

                <button className="main-item-btn" onClick={navigateToContacts}>Contact</button>

                <button className="main-item-btn" onClick={navigateToAbout}>About</button>

                <button className="main-item-btn" onClick={navigateToCarsClassic}>Cars Classic</button>

                <button className="main-item-btn" onClick={navigateToCarsSport}>Cars Sport</button>

                <button className="main-item-btn" onClick={navigateToCarsLuxury}>Cars Luxury</button>

                <button className="main-item-btn" onClick={navigateToFaq}>FAQ</button>

                <Routes>
                    <Route path="/faq" element={< Faq />} />
                    <Route path="/carsluxury" element={< CarsLuxury />} />
                    <Route path="/carssport" element={< CarsSport />} />
                    <Route path="/carsclassic" element={< Carsclassic />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

function Home() {
    return <HomePage />;
}

function Contacts() {
    return <ContactPage />;
}

function About() {
    return <AboutPage />;
}

function Carsclassic() {
    return <CarsPage />;
}

function CarsSport() {
    return <CarsSportPage />;
}

function CarsLuxury() {
    return <CarsLuxuryPage />;
}

function Faq() {
    return <FaqPage />;
}