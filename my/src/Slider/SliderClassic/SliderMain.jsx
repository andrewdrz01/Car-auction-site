import React from "react";
import AppSliderClassicTwo from "./SliderCarTwo";
import AppSliderCarThree from "./SliderCarThree";
import AppSliderClassicOne from "./SliderCarOne";

import "./SliderMain.css"

export default function CarsClassics() {
    return (
        <div className="main-container-classic">
            <div className="main-tittle-car-classic">
                <h2 className="tittle-car-classic">Poznaj nasze propozycje samochodów klasycznych !</h2>
            </div>
            <div className="main-item-cars-choices">
                <AppSliderClassicOne />
                <AppSliderClassicTwo />
                <AppSliderCarThree />
            </div>
        </div>
    )
}