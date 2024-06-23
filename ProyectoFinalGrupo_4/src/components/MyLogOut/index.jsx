import React from "react";
import './index.css';

function MyLogOut({isOpen, onClose, onLogout}) {
    if (!isOpen) return null;
    return (
        <>
        <div className="overlay" onClick={onClose}>
            <div className="modal">
            <button className="close" onClick={onClose}>x</button>
                <div className="content">
                    <h2 className="title">Do you want to log out?</h2>
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="buttons"> 
                        <button className="yes" onClick={onLogout}>Yes</button>
                        <button className="no" onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyLogOut;