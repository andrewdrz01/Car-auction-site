import React from "react";

// import "../SliderLuxury/SliderCar.css"


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarLuxuryOne() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/19/1997ddba-ed1e-49f0-8e45-74afaa864fd2?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/c6/c68b27a1-79f9-484c-8078-69b69976065b?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/8d/8d2ac2f5-e6e2-4284-aa71-2df4e282557b?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ce/ce9803de-02a5-4825-8815-a7e6ed08db9e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/10/105b85c8-1b7e-46cf-9514-41c63c5b6f62?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/9c/9ccf16e6-a39c-494c-bfe1-f941ca63d410?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/cd/cd393fc4-df5c-4e8c-8a7c-6608cc692306?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b7/b782b248-5641-4ea4-ae79-1434e4099824?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/8c/8c0efebe-8bd8-45a4-96bb-f177c16085ba?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f5/f5aebada-eef1-4d50-b66c-918256268250?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/a5/a5183969-7ca9-4a53-b37e-04f1c4ab5210?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/5b/5bcd6386-5ea4-4f12-9b16-c5f2bb269b04?rule=mo-1024.jpg",
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
                    titlecar="Rolls-Royce Ghost"
                    specs="6.5 571HP AT"
                    km="37 000 km"
                    year="2016"
                    price="912 946 PLN"
                    text="
                    Ghost to model luksusowego sedana produkowanego przez brytyjską firmę Rolls-Royce Motor Cars w Goodwood.
                    Wśród wyposażenia opcjonalnego znajdują się: wentylowane fotele, masaż w tylnej kanapie, lodówka, zasłony w tylnych oknach, wełniane dywaniki i wiele innych. 
                    Wewnątrz królują wysokiej jakości drewno i skóra. Deska rozdzielcza oraz panele boczne są bardzo proste i utrzymane w charakterze marki. Centralnie umieszczono duży wyświetlacz dotykowy.
                    Samochód w stanie perfekcyjnym, bez wkladu."
                />
            </div>
        </div>
    );
}