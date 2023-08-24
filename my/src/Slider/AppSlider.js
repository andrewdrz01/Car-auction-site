import React from "react";

import './Slider.css';
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

export default function AppSlider() {
    return <ImageSlider slides={SliderData} />;
}

