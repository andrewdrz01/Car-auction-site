import React from "react";
import AppSliderCarSportOne from "./SliderCarSportOne";
import FooterPage from "../../Components/Footer";
import AppSliderCarSportTwo from "./SliderCarSportTwo";

import "./SportCar.css"
import AppSliderCarSportThree from "./SliderCarSportThree";

export default function CarsSportPage() {
    return (
        <div className="main-container-sport">
            <div className="main-tittle-car-sport">
                <h2 className="tittle-car-sport">Poznaj nasze propozycje samochodów sportowych i hipercarów !</h2>
            </div>
            <AppSliderCarSportOne />
            <AppSliderCarSportTwo />
            <AppSliderCarSportThree />
            <FooterPage />
        </div>
    )
}