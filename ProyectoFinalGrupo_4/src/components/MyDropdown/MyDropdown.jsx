import App from "../../App";
import React from "react";

function MyDropdown() {
    return (
        <div className="Dropdown">
            <input placeholder="Search games..."></input>
        </div>
    )
}

export default MyDropdown;

/*
import React, { useState, useEffect } from "react";
import "./Dropdown.css"; // Importa los estilos

function Dropdown() {
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Simula una llamada a una API para obtener las opciones
    useEffect(() => {
        async function fetchOptions() {
            // Simula un retraso
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Supongamos que esta es la respuesta de la API
            const fetchedOptions = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grape"];
            setOptions(fetchedOptions);
        }

        fetchOptions();
    }, []);

    // Filtra las opciones basadas en el input del usuario
    useEffect(() => {
        if (inputValue === "") {
            setFilteredOptions([]);
        } else {
            const lowerCaseInput = inputValue.toLowerCase();
            setFilteredOptions(options.filter(option => option.toLowerCase().includes(lowerCaseInput)));
        }
    }, [inputValue, options]);

    return (
        <div className="Dropdown">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type to search..."
            />
            {filteredOptions.length > 0 && (
                <ul className="Dropdown-options">
                    {filteredOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;

*/