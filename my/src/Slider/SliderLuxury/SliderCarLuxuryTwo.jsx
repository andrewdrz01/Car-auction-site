import React from "react";


import { useState } from "react";
import "../SliderClassic/SliderTest.css";
import CarDefault from "../../Components/CarComp";


export default function AppSliderCarLuxuryTwo() {
    const [currImg, setCurrImg] = useState(0);
    const [, setIsModalOpen] = useState(false);

    const images = [
        "https://img.classistatic.de/api/v1/mo-prod/images/6b/6b08e133-f235-4256-a5d6-25582d1c9ce7?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/cf/cf698842-4324-484b-a571-91463c39f54f?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/63/637e6a55-9897-4a9c-b371-5c599a047397?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/67/6768980d-89ef-4b54-a34d-c6951f27504a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/8d/8d76214c-bc21-4e66-8c2c-b7b1b680e010?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/67/671fdabf-b1a6-4f01-906b-a0dc90e4b23b?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/aa/aa7f8488-42e9-46f5-a00b-f12d5570d7fb?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/75/75db02c1-574f-4b07-a7a8-d3584cfc647a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/a7/a7a53e86-3c7c-489b-926e-0bd7cd6cd108?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/3a/3aead1a0-e4f9-42d0-b8d5-f5495e4bbf3a?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/fe/fe4e5dfe-70e3-4d7c-92a4-b5f40681c1b4?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/46/46cbc336-1f96-41fc-a6f3-5d68ae6c8470?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/0c/0ceae22e-3e92-4ef6-98ec-ebfdc2e8dd81?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/42/4284d58b-b8a9-4431-8a36-c783f5d80575?rule=mo-1024.jpg",
        "https://img.classistatic.de/api/v1/mo-prod/images/df/dfe91dfe-f8f7-4621-9c0c-cebb39e40d67?rule=mo-1024.jpg",

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
                    titlecar="Volvo XC90 B5 D AWD R-Design"
                    specs="2.0 241HP AT"
                    km="2000 km"
                    year="2023"
                    price="410 469  PLN"
                    text="
                    Kiedy konkurenci, nawet w bazowych wersjach, pod maskę swoich największych SUV-ów wkładają sześciocylindrowe silniki, to Volvo podjęło odważną decyzję i XC90 napędzane jest przez dwulitrowe jednostki R4.
                    Króluje tu minimalizm i elegancja.
                    System audio Premium Sound Bowers & Wilkins robi po prostu niesamowite wrażenie.
                    Jeśli szukacie komfortowego, przestronnego i rodzinnego SUV-a, to warto zainteresować się XC90. 
                    Samochód w stanie perfekcyjnym, auto potestowe."
                />
            </div>
        </div>
    );
}