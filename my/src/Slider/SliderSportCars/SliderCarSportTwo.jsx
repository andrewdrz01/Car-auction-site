import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarSportTwo() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/bd/bd5c6725-1955-4f89-abbc-3c82f618df73?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/49/493ddbb7-4083-4543-8972-4fb7eddf92cd?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/4c/4c26d2b7-3c48-4f29-b769-36de83a6befe?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/51/5139c2dd-b9e0-4cb6-955d-11bf1ddcbf13?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/a7/a729f758-662a-4c5f-9425-8854c003cd8c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ad/ad6edc4d-0f1a-48ee-92cf-85e327e63dae?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ad/ad6edc4d-0f1a-48ee-92cf-85e327e63dae?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/7c/7c39196a-8968-4b55-99e9-086b52843b8c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d6/d68ac289-dec0-4806-bec3-8a68a23de8b6?rule=mo-1024.jpg",
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
                    titlecar="Koenigsegg Agera R"
                    specs="5.0 1201HP AT"
                    km="11 754 km"
                    year="2014"
                    price="10 052 460 PLN"
                    text="Koenigsegg jest marka,która podnosi cisnienie w kazdym fanie motoryzacji a prezentowany model jest dopracowana odmiana Agery.
                    Warto także zaznaczyć, że prędkość maksymalna to ponad 420 km/h. Napęd przenoszony jest poprzez 7-biegową, dwusprzęgłową przekładnię automatyczną.
                    Samochód w stanie jak z fabryki - bezinwestycyjny w perfekcyjnym stanie."
                />
            </div>
        </div>
    );
}