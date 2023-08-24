import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarLuxuryFour() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/86/86493e98-eba7-4c69-a125-8bbdf6742a22?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/04/0408e107-dcff-4a32-a51a-b277180d6dec?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/16/166e473f-a0ea-4073-98e9-15156607708e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ec/ec0377e7-48a1-467f-955f-875d0c24b72e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/73/73586266-ab67-40eb-87cc-25224f2c0952?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/26/264bc546-233c-433e-bad5-13ed73b3e3f9?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/d2/d2a80661-9c69-4ce4-a1e6-c43010cc9f68?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/ec/ecce7007-0b66-4b87-aadf-706a5ecc511d?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0c/0c35e8b7-03fe-4519-810f-e3b09ee79ad2?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/12/12b8f3c5-264a-4ca0-bbb9-8df79632f7ea?rule=mo-1024.jpg",

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
                    titlecar="Mercedes-Benz G 650 Maybach Landaulet 1 of 99"
                    specs="6.0 630HP AT"
                    km="100 km"
                    year="2018"
                    price="3 454 354  PLN"
                    text="
                    Landaulet to stosunkowo mało znany typ nadwozia, w którym część dachu jest sztywna, a część składana, wykonana z materiału.
                    Ekskluzywna Klasa G od marki Mercedes-Maybach łączy w sobie cechy luksusowej limuzyny z prawdziwą terenówką.
                    Na pokładzie przygotowano wygodne miejsca dla czterech osób. Naturalnie najlepsze warunki panują na tylnych fotelach z Klasy S, oddzielonych rozbudowaną konsolą, nad którymi znajduje się elektrycznie składany miękki dach.
                    Samochód w stanie perfekcyjnym, salonowe."
                />
            </div>
        </div>
    );
}