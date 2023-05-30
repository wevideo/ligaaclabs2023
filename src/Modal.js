import { createPortal } from "react-dom";
import "./Modal.css";
import React from "react";

export const Modal = ({ children, onClose, open }) => {
    return open && createPortal(<div className="ModalBackground">
        <div className="Modal">
            {children}
            <button className="ModalClose" onClick={onClose}>x</button>
        </div>
    </div>, document.getElementById("modals-root"));
}