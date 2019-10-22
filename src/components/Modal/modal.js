import React from 'react'
import useRenderCount from '../../renderCountHook'
import './modal.css'
import closeIcon from '../../images/delete.png'

const Modal = ({ show, handleClose, children }) => {
    useRenderCount("MODAL")
    return (
        <div className={show ? "modals" : null}>
            <section className="modals-main"
                style={{ transform: show ? 'translateY(0) scale(1)' : 'translateY(-100vh) scale(0.7)' }}>
                {children}
                <div className="close-icon" onClick={handleClose}>
                    <img src={closeIcon} />
                </div>
            </section>
        </div>
    );
}
export default Modal