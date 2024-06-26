import { getGameById, getGameScreenshotsById } from "../../../api/api";
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
import ThumbsUpIcon from "../../assets/Thumbs Up.svg"
import chatIcon from "../../assets/Chat Bubbles.svg"
import shareIcon from "../../assets/Action.svg"

function MyModal({ showingModal, changeModal }){
    const [gameDetails, setGameDetails] = useState([])
    const [gameScreenshots, setGameScreenshots] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getGameDetails = async () => {
            setLoading(true)
            try {
                const newGameDetails = await getGameById(showingModal.showingId)
                setGameDetails(newGameDetails)
                await getGameScreenshots()
                setLoading(false)
            } catch (error) {
                console.error(`Error fetching game with id ${showingModal.showingId} details:`, error)
            } finally {
                setLoading(false)
            }
        }
        const getGameScreenshots = async () => {
            setLoading(true)
            try {
                const newGameScreenshots = await getGameScreenshotsById(showingModal.showingId)
                setGameScreenshots(newGameScreenshots.results)
                setLoading(false)
            } catch (error) {
                console.error(`Error fetching game screenshots for game with id ${showingModal.showingId} details:`, error)
            } finally {
                setLoading(false)
            }
        }

        if (showingModal.showingId) {
            getGameDetails()
        } else {
            setLoading(false)
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
    
    const platformsComponent = () => {
        let platformsArray = gameDetails.platforms
        let string = ''
        
        platformsArray.forEach(e => {
            string += e.platform.name + ", ";
        });
        
        string = string.slice(0, -2);
        
        return string;
    }

    const publishersComponent = () => {
        let publishersArray = gameDetails.publishers
        let string = ''

        publishersArray.forEach(e => {
            string += e.name + ", "
        })
        string = string.slice(0, -2)
        return string
    }

    const genresComponent = () => {
        let genresArray = gameDetails.genres
        let string = ''

        genresArray.forEach(e => {
            string += e.name + ", "
        })
        string = string.slice(0, -2)
        return string
    }

    const developersComponent = () => {
        let developersArray = gameDetails.developers
        let string = ''

        developersArray.forEach(e => {
            string += e.name + ", "
        })
        string = string.slice(0, -2)
        return string
    }

    const ageRatingComponent = () => {
        switch (gameDetails.esrb_rating.id) {
            case 1:
                return "Everyone"
            case 2:
                return "10+"
            case 3:
                return "13+"
            case 4:
                return "17+"
            case 5:
                return "18+"
            case 6:
                return "Pending rating"
            case 7:
                return "Pending rating, likely 18+"
        }
    }

    if (!loading){

        return(
            <>
            <div className="darkBG" onClick={() => changeModal({showingBoolean: false, showingId: null})} />
            <div className="gameDetailsContainer">
                <div id="gameImageContainer" style={{ backgroundImage: `url(${gameDetails.background_image})` }}>
                <div id="gradientOverlay"></div>
                    <MyButton className="transparent" icon={XIcon} onClick={() => changeModal({showingBoolean: false, showingId: null})}/>
                    <div id="titleComponents">
                        {renderPlatformIcons()}
                        <h1>{gameDetails.name}</h1>
                        <div id="chipsContainer">
                            <MyChips /> <MyChips /> <MyChips />
                        </div>
                    </div>
                    <div id="bottomContainer">
                        <div id="bottomLeft">
                            <div id="descriptionContainer">
                                <p>{gameDetails.description_raw}</p>
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
                                    <p>{gameDetails.released}</p>
                                </div>
                                <div className="miscInfoComponent">
                                    <p>Publisher</p>
                                    {publishersComponent()}
                                </div>
                                <div className="miscInfoComponent">
                                    <p>Website</p>
                                    <p>{gameDetails.website}</p>
                                </div>
                                <div className="miscInfoComponent">
                                    <p>Genre</p>
                                    <p>{genresComponent()}</p>
                                </div>
                                <div className="miscInfoComponent">
                                    <p>Developer</p>
                                    <p>{developersComponent()}</p>
                                </div>
                                <div className="miscInfoComponent">
                                    <p>Age rating</p>
                                    <p>{ageRatingComponent()}</p>
                                </div>
                                <div id="interactionIcons">
                                    <img src={chatIcon} />
                                    <img src={ThumbsUpIcon} />
                                    <img src={shareIcon} />
                                </div>
                            </div>
                        </div>
                        <div id="bottomRight">
                            <div id="mediaContainer">
                                <img src={gameScreenshots[0].image} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        );
    } else {
        return 
    }
    
};

export default MyModal;
