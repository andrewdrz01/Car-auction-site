import React from "react";
// import "../Css/About.css"

export default function AboutDefault({ name, detailsInfo, imgProfile }) {
    return (
        <div className="main-details">

            <img src={imgProfile} alt={name + 'photo'} className="img-item" />
            <h2 className="tittle-details">{name}</h2>
            <p className="item-details">{detailsInfo}</p>
        </div>
    )
}


