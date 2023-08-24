import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarSportOne() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/66/6688dae1-c139-44c8-b6b0-5913e2569aeb?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/10/1026a8f5-86f8-4faa-8851-6df9b303f919?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/c1/c1cb00b1-a9a5-4903-8d48-08248bc15873?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/cf/cf20ef80-3ab3-4edd-8272-6a3fe08bcf72?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/82/82c04cb9-bc51-431f-9ed0-a4986a44da3c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/31/31de3667-869e-4753-b56b-b8086a5c6040?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f9/f9836593-7871-4c00-b65f-d9c94d355f86?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/9b/9ba30cac-cd70-44ee-bc5b-908520a38457?rule=mo-1024.jpg",
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
                    titlecar="Lamborghini Aventador SVJ Roadster"
                    specs="6.5 770HP AT"
                    km="195 km"
                    year="2021"
                    price="3 183 153 PLN"
                    text="Lamborghini Aventador SVJ może być prawdopodobnie ostatnim samochodem marki z silnikiem V12 nie wspomaganych elektrycznością.
                    Samochód wygląda agresywnie, wszystkie wloty są wielkie, same auto wydaje się szersze od klasycznego modelu, a całości dopełnia potężny spojler z tyłu.
                    Lamborghini Aventador SVJ jest limitowany do 900 sztuk.
                    Samochód w stanie jak z fabryki - bezinwestycyjny."
                />
            </div>
        </div>
    );
}