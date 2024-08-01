import React from "react";
import { Dialog } from 'primereact/dialog'

export default function Information({ visible, setVisible, item, image }) {
    return (
        <Dialog
            className="w-4"
            visible={visible}
            onHide={() => setVisible(false)}>
            <div className="flex flex-wrap gap-6">
                <img className="h-30rem" src={image} alt="" />
                <div className="w-4">
                    <p>{item.title} - {item.releaseYear}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        </Dialog>
    )
}