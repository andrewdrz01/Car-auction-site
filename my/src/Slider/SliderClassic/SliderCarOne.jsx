import React from "react";


import { useState } from "react";
import "./SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderClassicOne() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/a1/a157ce67-8328-4517-af40-6e90d91c7cca?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0f/0f15fc34-5191-4d44-9bd1-064275a87d20?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/e6/e65a81ae-57f2-45e2-bdfe-9ed6ff74ef40?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/31/31670be4-f6d0-4260-920b-404b1e440377?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0b/0bf24e97-b0f0-4653-b6a4-f00854fec08e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/c4/c497a049-2b81-4501-9f2c-45422a4eeb0e?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/24/2445aa9c-e491-4798-85e4-a92504b6e8cd?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/b0/b02988e1-d387-4740-9cc4-8efcd95177a9?rule=mo-1024.jpg",

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
                    titlecar="Corvette C1 Cabriolet"
                    specs="3.9L 160HP AT"
                    km="84 622 km"
                    year="1954"
                    price="713 842  PLN"
                    text="Przedstawiamy pierwszą generacje Chevroleta Corvette C1 w wersji cabrio z 1954r. Auto bardzo dobrze się prezentuje, lakier i wnętrze jest w idealnym stanie, nowy dach oraz siedzenia. Corvette C1 pojawił się po raz pierwszy w 1953 roku jako dwuosobowy kabriolet, a właściwie roadster. Nadwozie wykonane z tworzywa sztucznego osadzono na stalowej ramie. Samochód zadbany po renowacji, przygotowwany do jazdy."
                />
            </div>
        </div>
    );
}