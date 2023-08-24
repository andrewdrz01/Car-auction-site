import React from "react";


import { useState } from "react";
import "./SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderClassicTwo() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/03/038758b7-5b52-4c3f-a6a1-1a8d17b724ac?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/12/12c3be67-4954-41d9-a392-3bcaf1b15971?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d1/d18be9ab-7abe-453e-bf8b-0fa8cf5023d3?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/48/4848d24a-9931-48d5-8baa-faca6348c43e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/7a/7acafa17-1346-4ba2-81aa-9caf70a1ddee?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/47/47f59f57-95d9-4806-a6b2-b73d4d284804?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/da/daba080d-923f-47f9-a609-eec387cd80a4?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d3/d3721934-08e0-4fa5-bb29-7a9528459af8?rule=mo-1024.jpg",
    ];

    const prevImg = () =>
        setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

    const nextImg = () =>
        setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

    return (
        <div className="app">

            <div className="img-container">
                <img
                    src={images[currImg]}
                    className="img modal-img"
                    alt="girl"
                    onClick={() => setIsModalOpen(true)}
                />

                <button type="button" onClick={prevImg} className="btn btn--prev">
                    {"<"}
                </button>
                <button type="button" onClick={nextImg} className="btn btn--next">
                    {">"}
                </button>
            </div>

            <div className="main-car-details">
                <CarDefault
                    titlecar="Ford Mustang SHELBY GT 500 ELEANOR"
                    specs="6.4 421HP MT"
                    km="21 572 km"
                    year="1967"
                    price="1 384 498 PLN"
                    text="Z dodatkowymi halogenami na atrapie, garbatą maską z dodatkowymi wlotami powietrza i zmienionymi tylnymi światłami Shelby GT500 wyglądał niezwykle, ale jego największe zalety skrywały się pod maską.
                    Samochód po dużym serwisie mechanicznym oraz odnowieniu powłoki lakierniczej."
                />
            </div>
        </div>
    );
}