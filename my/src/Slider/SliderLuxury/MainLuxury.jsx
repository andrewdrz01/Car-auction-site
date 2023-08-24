import React from "react";
import "./LuxuryCar.css";
import FooterPage from "../../Components/Footer";
import AppSliderCarLuxuryOne from "./SliderCarLuxurtOne";
import AppSliderCarLuxuryTwo from "./SliderCarLuxuryTwo";
import AppSliderCarLuxuryThree from "./SliderCarLuxuryThree";
import AppSliderCarLuxuryFour from "./SliderCarLuxuryFour";
import AppSliderCarLuxuryFifth from "./SliderCarLuxuryFifth";

import "../SliderClassic/SliderTest.css"


export default function CarsLuxuryPage() {
    return (
        <div className="main-container-luxury">
            <div className="main-tittle-car-luxury">
                <h2 className="tittle-car-luxury">Poznaj nasze propozycje samochodów premium i luxury !</h2>
            </div>
            <AppSliderCarLuxuryOne />
            <AppSliderCarLuxuryTwo />
            <AppSliderCarLuxuryThree />
            <AppSliderCarLuxuryFour />
            <AppSliderCarLuxuryFifth />
            <FooterPage />
        </div>
    )
}