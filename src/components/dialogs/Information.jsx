import React from "react";
import { Dialog } from 'primereact/dialog'

export function Information({ visible, setVisible }) {
    return (
        <Dialog
            visible={visible}
            onHide={() => setVisible(false)}>

        </Dialog>
    )
}