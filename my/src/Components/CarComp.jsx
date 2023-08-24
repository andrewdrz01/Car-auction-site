import React from "react";
import "../Css/CarComp.css"

export default function CarDefault({ titlecar, specs, year, price, km, text }) {
    return (
        <div className="main-cars-information">
            <ul>
                <li className="item-car-information-title">{titlecar}</li>
                <li className="item-car-information">{specs}</li>
                <li className="item-car-information">{year}</li>
                <li className="item-car-information">{km}</li>
                <li className="item-car-information-price">{price}</li>
                <li className="item-car-information-price">{text}</li>
            </ul>
        </div>
    )
}