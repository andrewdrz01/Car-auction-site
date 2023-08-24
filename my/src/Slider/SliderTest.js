import React from "react";

export default function SliderTest() {
    return (
        <div>
            <SimpleImageSlider
                width={690}
                height={470}
                images={sliderImages}
                showNavs={true}
            />
        </div>
    )
}