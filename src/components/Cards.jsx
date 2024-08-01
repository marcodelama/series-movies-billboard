import React, { useState } from "react";
import { Card } from "primereact/card";
import defaultImage from '../assets/default-image.jpg'
import Information from "./pure/dialogs/Information";

export default function Cards({ title, image, item }) {
    const [imageSrc, setImageSrc] = useState(image);
    const [visible, setVisible] = useState(false);

    const handleError = () => {
        setImageSrc(defaultImage)
    }

    return (
        <div className="w-2">
            <Card className="bg-black-alpha-90 hover-opacity-30 cursor-pointer transition-duration-300" onClick={() => setVisible(true)}><img className="w-full" src={imageSrc} alt="images" onError={() => handleError()} /></Card>
            <p>{title}</p>
            <Information visible={visible} setVisible={setVisible} item={item} image={imageSrc} />
        </div>
    )
}