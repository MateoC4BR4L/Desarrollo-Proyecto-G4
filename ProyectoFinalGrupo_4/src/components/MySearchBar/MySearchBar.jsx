import React from "react";
import "./MySearchBar.css";
import SearchIcon from "../../assets/SearchGray.svg";

function MySearchBar({ value, onChange, onFocus }){
    return(
        <div className="SearchBar">
            <img src= {SearchIcon} className="img"/>
            <input
                className="Search" 
                placeholder="Search games..." 
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                type="text"
            />
        </div>
    );
}
export default MySearchBar;
