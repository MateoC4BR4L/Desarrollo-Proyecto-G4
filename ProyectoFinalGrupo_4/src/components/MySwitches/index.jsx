import React, { useState } from "react";
import "./MySwitches.css"; // Assuming you have some styles for the switch

export const MySwitches = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <label htmlFor="switch" className="switch">
                <input
                    type="checkbox"
                    id="switch"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};
