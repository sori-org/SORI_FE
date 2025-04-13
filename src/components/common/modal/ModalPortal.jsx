import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal-root");
    return el ? createPortal(children, el) : null;
};

export default ModalPortal;
