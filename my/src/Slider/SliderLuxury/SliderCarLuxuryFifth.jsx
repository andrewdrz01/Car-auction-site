import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarLuxuryFifth() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/97/973a51f7-484e-4452-87f1-0e5c98bd28a3?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f3/f3791450-a004-4d25-a1de-9e9b7d051511?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/fc/fc0e548c-482a-452f-93ba-5cb10d40a05c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/57/57335960-60e7-49c3-81ed-609c0efee950?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/05/05e43bed-0d8c-46c9-8f6d-ed5c06c96c7c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/7b/7bd15749-8291-4815-a237-6d7a9205cfcf?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/5c/5c12fd5f-5108-4409-8335-e719e56b2f46?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/4f/4fec42e1-f9b5-43b3-b5ae-434ab77bb7f8?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0f/0fdea70a-4cb9-4451-9f85-ea846530da59?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ad/ad711ce1-d79e-4c13-bcf7-2de2ad4c80cc?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/2a/2ad5ac1b-8774-4746-bdc6-e89db01ebe26?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f4/f4a92b6c-f263-45cf-b35a-b3aa36ea5c47?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/8a/8a6900cc-2af5-4b6c-9b78-efe157c56c6a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/bb/bbbeb493-e53d-4559-8009-f1df3cb09b91?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/05/0569d313-13d1-41cf-8438-ac5e0e3e5d0d?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/84/8424e036-af21-4b6c-9650-85f0c49f5b65?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/e7/e719f332-09be-4cca-a399-673b623cac47?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ec/ecb3ce4f-e5c6-45a6-a2b1-29147b84e61a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/a4/a47e03ae-4d44-4aaa-a30a-f3a6f4162a5c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/58/58268e3a-540b-4862-9400-267fa53499da?rule=mo-1024.jpg",
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
                    alt="car"
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
                    titlecar="Audi RS6 Avant CARBON CUSTOM STAGE3"
                    specs="4.0 1050HP AT"
                    km="36 073 km"
                    year="2020"
                    price="1 368 505 PLN"
                    text="
                    Niby zwykłe kombi, a jednak jakieś takie niezwykłe. 
                    Z jednej strony mocny silnik V8 i rasowe brzmienie zachęcają do agresywnej jazdy, z drugiej – pneumatyczne zawieszenie i pojemne wnętrze sprzyjają dalekim wojażom.
                    Imponujące możliwości oferuje system multimedialny, który świetnie dogaduje się ze smartfonami opartymi na platformach Android Auto i Apple CarPlay.
                    Uwagę przyciągają trzy duże ekrany (a na upartego są nawet cztery).
                    Samochód w stanie perfekcyjnym, bez wkladu po duzych modyfikacjach."
                />
            </div>
        </div>
    );
}