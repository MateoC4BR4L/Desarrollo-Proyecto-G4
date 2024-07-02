import React, { useState, useEffect } from "react";
import "./MyDropdown.css";
import MySearchBar from "../MySearchBar/MySearchBar";
import { getGames } from "../../../api/api";
import MyModal from "../MyModal/MyModal"; 

function MyDropdown({ id, games }) {
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [showingModal, setShowingModal] = useState({ showingBoolean: false, showingId: null }); // Estado para el modal

    useEffect(() => {
        setOptions(games)
    }, [games]);

    useEffect(() => {
        if (inputValue === "") {
            setFilteredOptions([]);
        } else {
            const lowerCaseInput = inputValue.toLowerCase();
            setFilteredOptions(options.filter(option => option.name.toLowerCase().includes(lowerCaseInput)));
        }
    }, [inputValue, options]);

    useEffect(() => {
        setIsDropdownVisible(filteredOptions.length > 0 || inputValue !== "");
    }, [filteredOptions, inputValue]);

    const handleOverlayClick = () => {
        setIsDropdownVisible(false);
        setInputValue("");
    };

    const handleOptionClick = (id) => {
        setShowingModal({ showingBoolean: true, showingId: id });
        setIsDropdownVisible(false);
        setInputValue("");
    };

    const changeModal = (modalState) => {
        setShowingModal(modalState);
    };

    return (
        <>
            {isDropdownVisible && <div className="Overlay" onClick={handleOverlayClick}></div>}
            <div className="Dropdown" id={id}>
                <MySearchBar 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                    onFocus={() => setIsDropdownVisible(true)}
                />
                {isDropdownVisible && (
                    <ul className="DropdownList">
                        {filteredOptions.map((option) => (
                            <button 
                                className="DropdownButton" 
                                key={option.id} 
                                onClick={() => handleOptionClick(option.id)}
                            >
                                {option.name}
                            </button>
                        ))}
                    </ul>
                )}
            </div>
            {showingModal.showingBoolean && (
                <MyModal
                    showingModal={showingModal}
                    changeModal={changeModal}
                />
            )}
        </>
    );
}

export default MyDropdown;

