import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarSportThree() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/ec/ec8ee6ec-2ea0-49ed-93be-b04b944a9d6b?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0a/0af95ae5-4883-4be2-b8a6-79b3c8d91a12?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/c0/c0fcbc91-b31b-4f1b-a503-c83056829c1d?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/02/027f6434-e9a8-4264-9af0-6408abf5fb4a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/72/7212a50d-ed2a-45c5-af4e-eac421000342?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f7/f7609c89-4357-4f61-8e59-7e8b0faca88f?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/53/532b953f-2ff8-4caf-9ddf-115171b1c62e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/9c/9c35b7ea-7e9c-49ff-9055-3be870ed9ae6?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/50/50034314-00ab-4771-8d01-4c32f64c6466?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d1/d1424dce-bc73-412b-8411-977315a02f19?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d9/d9403320-03d9-4309-8fe8-d6e3b1653c8c?rule=mo-1024.jpg",
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
                    titlecar="Ferrari 812 GTS "
                    specs="6.5 799HP AT"
                    km="15 km"
                    year="2022"
                    price="2 639 621 PLN"
                    text="
                    Ferrari 812 GTS, które dzięki silnikowi o mocy 799 KM zasługuje na miano najpotężniejszego, przedniosilnikowego kabrioletu świata - jest naprawdę szybkie i kusi aż dwunastoma cylindrami pod maską. Auto jest wyposazone w skladany dach.
                    Proces jego składania odbywa się automatycznie i może trwać także podczas jazdy. Pod warunkiem, że prędkość nie jest większa niż 45 km/h. Całość trwa około 14 sekund.
                    Samochód w stanie jak z fabryki - bezinwestycyjny."
                />
            </div>
        </div>
    );
}