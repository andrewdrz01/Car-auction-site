import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarLuxuryThree() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/9a/9ad1acf9-aab6-44d7-a580-c1c89c56d6c3?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/34/3432fc1d-819f-448a-ac29-5e7e6bbf59f5?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/77/77c0b00a-ed21-435d-b51d-2a0683479d35?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b9/b910f01f-bc97-4f85-977b-c01ebe1c3d75?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/fd/fd502883-18bb-476e-a7d4-52cbe586165c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b1/b11554eb-65b8-4cc6-b65e-40a2a4ca5f3c?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f5/f5f404da-eabd-4945-bb1e-0b9ca8a5fc31?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/05/05c0d5e7-3dde-4b6a-ae84-69e60e8eeef4?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/87/878e09d7-34ce-4d99-99a8-45f240ad4cf3?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/8e/8e1f0821-8e9c-4f67-95b7-f80776060fd0?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/4e/4eb58d4e-4129-49f1-9249-76d68eb10a25?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/4e/4eb58d4e-4129-49f1-9249-76d68eb10a25?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b9/b9a623e4-f3c5-43d3-a3b9-0b6eb65dcffc?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b8/b8df43d1-867b-46a5-af7c-1355ac641677?rule=mo-1024.jpg",
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
                    titlecar="Tesla Model S Plaid"
                    specs="EV 1020HP AT"
                    km="268 km"
                    year="2021"
                    price="571 930 PLN"
                    text="
                    Do wnętrza nowej Tesli zamiast kierownicy trafił wolant zoptymalizowany pod kątem współpracy z Autopilotem i nieograniczający widoczności.
                    Ciekawym rozwiązaniem, które pojawiło się przy okazji prezentacji tesli Model S Plaid jest nowa pompa ciepła z bardzo dużą, i ustawioną pod kątem chłodnicą.
                    Samochód do 100 km/h przyspiesza w 2,1 sek
                    Samochód w stanie perfekcyjnym, uzywane tylko na wystawach."
                />
            </div>
        </div>
    );
}