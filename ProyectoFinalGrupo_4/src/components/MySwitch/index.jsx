import React, { useState } from "react";
import "./index.css"; // Assuming you have some styles for the switch

export const MySwitch = ({checked, onChange}) => {

    return (
        <div>
            <label htmlFor="switch" className="switch">
                <input
                    type="checkbox"
                    id="switch"
                    checked={checked}
                    onChange={onChange}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};
