import React from "react";
import displayPhoto from "../../assets/biomutantpic0044-810x400.jpg"
import './index.css'


function MyCard({ size }){
    size = size.toLowerCase()
    if (size === "small") {
        return (
        <div className="cardContainer">
            <img className="cardGameDisplay" src={displayPhoto} /> {/* esta info tiene que ser aportada por la api */}
            <div className="cardInnerTitleContainerSmall">
                <h1 className="cardGameTitle">Game's name over here...</h1>
                <h1>#1</h1>
                {/* esta info tiene que ser aportada por la api  
                    falta el corazoncito en la imagen para darle favorite*/}
            </div>
            <div className="cardInnerInfoContainerSmall">
                    <div className="cardInnerInfoContainerTextSmall">
                        <p>Release date:    *date*</p>
                        <p>Genre:    *genre*</p>
                        {/* esta info tiene que ser aportada por la api*/}
                    </div>
                    <div className="cardInnerInfoContainerIconsSmall">
                        <p> fokin icons </p> 
                        {/* descargar los iconos y llamarlos aca */}
                    </div>
            </div>
        </div>)
    } else if (size === "big") {
        return (
            <div className="cardContainer">
                <img className="cardGameDisplay" src={displayPhoto} /> {/* esta info tiene que ser aportada por la api */}
                <div className="cardInnerTitleContainerBig">
                    <h1 className="cardGameTitle">Game's name over here...</h1>
                    <h1>#1</h1>
                    {/* esta info tiene que ser aportada por la api */}
                </div>
                <div className="cardInnerInfoContainerBig">
                        <div className="cardInnerInfoContainerTextBig">
                            <p>Release date:    *date*</p>
                            <p>Genre:    *genre*</p>
                            <p className="icons"> fokin icons </p>
                            {/* esta info tiene que ser aportada por la api 
                            falta el corazoncito en la imagen para darle favorite*/}
                        </div>
                        <div className="cardInnerInfoContainerBodyBig">
                            <p> Game description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
                            {/* esta info tien que ser aportada por la api */}
                        </div>
                </div>
            </div>)
        {/* diseñar la card grande */}
    }
}
export default MyCard