import React, { useState, useEffect } from "react";
import "./MyDropdown.css"; 
import MySearchBar from "../MySearchBar/MySearchBar";

function MyDropdown() {
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        async function fetchOptions() {
            // Simula un retraso
            //await new Promise((resolve) => setTimeout(resolve, 500));

            // Supongamos que esta es la respuesta de la API
            const fetchedOptions = ["Mario Party 1", "Mario Party 2", "Mario Party 3", "Mario Party 4"];
            setOptions(fetchedOptions);
        }

        fetchOptions();
    }, []);

    useEffect(() => {
        if (inputValue === "") {
            setFilteredOptions([]);
        } else {
            const lowerCaseInput = inputValue.toLowerCase();
            setFilteredOptions(options.filter(option => option.toLowerCase().includes(lowerCaseInput)));
        }
    }, [inputValue, options]);

    useEffect(() => {
        setIsDropdownVisible(filteredOptions.length > 0 || inputValue !== "");
    }, [filteredOptions, inputValue]);

    return (
        <>
            {isDropdownVisible && <div className="Overlay" onClick={() => setInputValue("")}></div>}
            <div className="Dropdown">
                <MySearchBar 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                    onFocus={() => setIsDropdownVisible(true)}
                />
                {isDropdownVisible && (
                    <ul className="DropdownList">
                        {filteredOptions.map((option, index) => (
                            <button className="DropdownButton" key={index}>{option}</button>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default MyDropdown;
