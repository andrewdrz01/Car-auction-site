import React from "react";
import FooterPage from "./Footer";

import CarsClassics from "../Slider/SliderClassic/SliderMain";

export default function CarsPage({ tittlecar, price, version, power, interior }) {
    return (
        <div className="main-container">
            <CarsClassics />
            <FooterPage />
        </div>
    )
}