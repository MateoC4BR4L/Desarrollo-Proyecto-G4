import React from "react";
import displayPhoto from "../../assets/biomutantpic0044-810x400.jpg"
import './index.css'


function MyCard({ size }){
    size = size.toLowerCase()
    if (size === "small") {
        return (
        <div className="cardContainer">
            <img className="cardGameDisplay" src={displayPhoto} /> {/* esta info tiene que ser aportada por la api */}
            <div className="cardInnerTitleContainer">
                <h1 className="cardGameTitle">Game's name over here...</h1>
                <h1>#1</h1>
                {/* esta info tiene que ser aportada por la api */}
            </div>
            <div className="cardInnerInfoContainer">
                    <div className="cardInnerInfoContainerText">
                        <p>Release date:    *date*</p>
                        <p>Genre:    *genre*</p>
                        {/* esta info tiene que ser aportada por la api */}
                    </div>
                    <div className="cardInnerInfoContainerIcons">
                        <p> fokin icons </p> 
                        {/* descargar los iconos y llamarlos aca */}
                    </div>
            </div>
        </div>)
    } else {
        return (<></>)
        {/* diseñar la card grande */}
    }
}
export default MyCard