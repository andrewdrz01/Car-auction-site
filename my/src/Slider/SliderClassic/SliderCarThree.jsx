import React from "react";


import { useState } from "react";
import "./SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarThree() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/a1/a129cc8c-30d0-4216-a56b-20f22608509a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/44/440c2c53-0790-41ba-b9c5-43a169f7aff5?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/82/82487cd1-5e7e-443c-9023-981b6df731ad?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/9b/9b25da09-6ca9-4dd4-87f2-812d6ba857e9?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/91/918cdb8b-e5ee-4507-af97-0f74d600a4fe?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/57/5789ee48-93e8-4039-97c8-b24ad4ea6665?rule=mo-1024.jpg",
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
                    titlecar="Maserati Ghibli"
                    specs="4.7 310HP MT"
                    km="52 699 km"
                    year="1972"
                    price="1 188 018 PLN"
                    text="Maserati Ghibli, tak jak jego bracia Mistral i Khamsin, zostało nazwane od wiatru.  Jego maksymalną prędkość szacuje się na ponad 280 km/h.
                    Jeden z najwspanialszych włoskich okazów klasy grand tourer lat 70-tych.
                    Samochód po dużym serwisie mechanicznym oraz odnowieniu powłoki lakierniczej."
                />
            </div>
        </div>
    );
}