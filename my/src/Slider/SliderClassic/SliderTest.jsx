import React from "react";


import { useState } from "react";
import "./SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppTestSlider() {
    const [currImg, setCurrImg] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/f2/f2e5f8b9-54c7-4f4f-bc2c-3675ccb42c35?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/f9/f987b61c-48c4-4a8c-8b0b-e9222d7ecdb9?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/1e/1e4af0ba-fa40-4484-af95-53d26ea8fb51?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/1e/1e4af0ba-fa40-4484-af95-53d26ea8fb51?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/6d/6d4d6624-f87c-433f-b1fc-b09350f13c02?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/a6/a6cd6c7c-66a3-4a7b-83f0-8d653ca088e9?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/1e/1e4701da-4ae5-4a3d-b0a8-84035473aa63?rule=mo-1024.jpg",
    ];

    const prevImg = () =>
        setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

    const nextImg = () =>
        setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

    return (
        <div className="app">
            <div className="main-tittle-car-classic">
                <h2 className="tittle-car-classic">Poznaj nasze propozycje samochodów klasycznych !</h2>
            </div>
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
                    titlecar="Lexus LFA"
                    specs="4.8 V10 560HP 480nm"
                    km="30000 km"
                    year="2010"
                    price="3 787 950 PLN"
                />
            </div>

            {/* {isModalOpen && (
                <div className="overlay">
                    <div className="modal">
                        <div className="img-container">
                            <span
                                className="close-icon"
                                onClick={() => setIsModalOpen(false)}
                            >
                                X
                            </span>
                            <img
                                src={images[currImg]}
                                className="img modal-img"
                                alt="girl"
                                onClick={() => setIsModalOpen(!isModalOpen)}
                            />

                            <button type="button" onClick={prevImg} className="btn btn--prev">
                                {"<"}
                            </button>
                            <button type="button" onClick={nextImg} className="btn btn--next">
                                {">"}
                            </button>
                        </div>
                        
                        <div>
                            {images.map((img, i) => (
                                <img
                                    key={img}
                                    src={img}
                                    className={`img--small ${i === currImg && "active"}`}
                                    alt="girl"
                                    onClick={() => setCurrImg(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
}