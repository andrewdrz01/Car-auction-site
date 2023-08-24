import React from "react";
import "../Css/Home.css";
import FooterPage from "./Footer";

export default function HomePage() {
    return (
        <div className="main-container">
            <div className="main-logo">
                <span className="item-logo-txt">CarFind Factory - Twój komis samochodów nieszablonowych</span>
            </div>
            <div className="main-info">
                <p className="item-title-txt">Czym jest CarFind Factory?</p>
                <br />
                <p className="item-info-txt">CarFind Factory - jesteśmy firmą z wieloletnim doświadczeniem w sprzedarzy samochodów bezwypadkowych każdej marki samochodów sportowych i klasycznych.</p>
                <br />
                <p className="item-info-txt">W naszej ofercie znajdziesz samochody bezwypadkowe z potwierdzoną historia. W swojej ofercie posiadamy zarówno samochody krajowe oraz te sprowadzane z zagranicy.</p>
                <br />
                <p className="item-info-txt">Posiadamy samochody każdej klasy i każdego segmentu.</p>
            </div>
            <FooterPage />
        </div>
    )
}