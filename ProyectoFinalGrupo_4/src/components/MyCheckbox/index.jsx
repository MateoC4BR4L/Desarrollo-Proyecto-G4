import React from "react";

function MyCheckbox( {text} ) {
    return (
    <div className="checkboxContainer">
            <input type="checkbox" name={text} value={text}/> {text} 
    </div>)
}
export default MyCheckbox;