import { getGameById } from "../../../api/api";
import App from "../../App";
import MyButton from "../MyButton/MyButton";
import "./MyModal.css"
import React, { useEffect, useState } from "react";
import XIcon from "../../assets/X.svg"
import WINDOWS from "../../assets/WINDOWS.svg"
import PSN from "../../assets/PSN.svg"
import XBOX from "../../assets/XBOX.svg"
import SWITCH from "../../assets/SWITCH.svg"
import MyChips from "../MyChips/MyChips";

function MyModal({ showingModal, changeModal }){
    const [gameDetails, setGameDetails] = useState([])

    useEffect(() => {
        const getGameDetails = async () =>{
            try {
                const newGameDetails = await getGameById(showingModal.showingId)
                setGameDetails(newGameDetails)
            } catch (error) {
                console.error(`Error fetching game with id ${showingModal.showingId} details:`, error)
            }
        }

        if (showingModal.showingId) {
            getGameDetails()
        }

    }, [showingModal.showingId])

    
    const renderPlatformIcons = () => {
        return (
            <div className="iconsContainer">
                {hasPlatform('pc') && <img src={WINDOWS} id="windows" alt="Windows" />}
                {hasPlatform('playstation') && <img src={PSN} id="psn" alt="PlayStation" />}
                {hasPlatform('xbox') && <img src={XBOX} id="xbox" alt="Xbox" />}
                {hasPlatform('nintendo') && <img src={SWITCH} id="switch" alt="Switch" />}
            </div>
        );
    };
    
    const hasPlatform = (slug) => {
        return gameDetails?.parent_platforms?.some(platform => platform.platform.slug === slug);
    };
    
    const platformsComponent = async () => {
        await gameDetails
        return gameDetails?.platform?.join(',')
    }

    return(
        <>
        <div className="darkBG" onClick={() => changeModal({showingBoolean: false, showingId: null})} />
        <div className="gameDetailsContainer">
            <div id="gameImageContainer" style={{ backgroundImage: `url(${gameDetails.background_image})` }}>
                <MyButton className="transparent" icon={XIcon} onClick={() => changeModal({showingBoolean: false, showingId: null})}/>
                <div id="titleComponents">
                    {renderPlatformIcons()}
                    <h1>{gameDetails.name}</h1>
                    <div id="chipsContainer">
                        <MyChips /> <MyChips /> <MyChips />
                    </div>
                </div>
                <div id="bottomContainer">
                    <div id="descriptionContainer">
                        {gameDetails.description_raw}
                        <MyButton className="transparent" title="Read more" />
                    </div>
                    <div id="buttonsContainer">
                        <MyButton title="Add to wishlist" />
                        <MyButton title="Purchase" />
                    </div>
                    <div id="miscInfoContainer">
                        <div className="miscInfoComponent">
                            <p>Platforms</p>
                            <p>{platformsComponent()}</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Release date</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Publisher</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Website</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Genre</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Developer</p>
                        </div>
                        <div className="miscInfoComponent">
                            <p>Age rating</p>
                        </div>
                        <div id="interactionIcons">
                            {/* Icons */}
                        </div>
                    </div>
                    <div id="mediaContainer">

                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default MyModal;
