import { getGameById, getGameScreenshotsById, getGameMoviesById } from "../../../api/api";
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
import heartIcon from "../../assets/Heart.svg"

function MyModal({ showingModal, changeModal, darkMode }){
    const [gameDetails, setGameDetails] = useState([])
    const [gameScreenshots, setGameScreenshots] = useState([])
    const [gameMovies, setGameMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [showingFullDescription, setShowingFullDescription] = useState(false)

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
                await getGameMovies()
                setLoading(false)
            } catch (error) {
                console.error(`Error fetching game screenshots for game with id ${showingModal.showingId} details:`, error)
            } finally {
                setLoading(false)
            }
        }
        
        const getGameMovies = async () => {
            setLoading(true)
            try {
                const newGameMovies = await getGameMoviesById(showingModal.showingId)
                setGameMovies(newGameMovies)
                setLoading(false)
            } catch (error) {
                console.error(`Error fetching game movies for game with id ${showingModal.showingId} details:`, error)
            } finally {
                setLoading(false)
            }
        }

        if (showingModal.showingId) {
            getGameDetails()
        } else {
            setLoading(false)
        }

    }, [showingModal.showingId]);

    
    const renderPlatformIcons = () => {
        return (
            <div className="iconsContainer">
                {hasPlatform('pc') && <img className="platformIcons" src={WINDOWS} /*id="windows"*/ alt="Windows" />}
                {hasPlatform('playstation') && <img className="platformIcons" src={PSN} /*id="psn"*/ alt="PlayStation" />}
                {hasPlatform('xbox') && <img className="platformIcons" src={XBOX} /*id="xbox"*/ alt="Xbox" />}
                {hasPlatform('nintendo') && <img className="platformIcons" src={SWITCH} /*id="switch"*/ alt="Switch" />}
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
        if (gameDetails.genres != null){
            let genresArray = gameDetails.genres
            let string = ''
    
            genresArray.forEach(e => {
                string += e.name + ", "
            })
            string = string.slice(0, -2)
            return string
        } else {
            return ""
        }
    }

    const developersComponent = () => {
        if (gameDetails.developers != null){
            let developersArray = gameDetails.developers
            let string = ''

            developersArray.forEach(e => {
                string += e.name + ", "
            })
            string = string.slice(0, -2)
            return string
        } else {
            return ""
        }
    }

    const ageRatingComponent = () => {
        if (gameDetails.esrb_rating != null) {
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
        } else {
            return "Pending rating"
        }
    }

    const movieComponent = () => {
        if (gameMovies.count != 0){
            return (
                <img src={gameMovies.results[0].preview} id="trailerDisplay" />
                /*  img onclick tiene que llamar gameMovies.results[0].data[0] en un modal para ver el video */
            )
        } else {
            return
        }
    }

    const imagesComponent = () => {
        return (
            <div id="gameScreenshotsContainer">
                {hasImage(0) && <img src={gameScreenshots[0].image} className="gameScreenshot" />}
                {hasImage(1) && <img src={gameScreenshots[1].image} className="gameScreenshot" />}
                {hasImage(2) && <img src={gameScreenshots[2].image} className="gameScreenshot" />}
                {hasImage(3) && <img src={gameScreenshots[3].image} className="gameScreenshot" />}
            </div>
        )
    }

    const hasImage = (number) => {
        return (gameScreenshots[number] != null)
    }

    const changeDescriptionDisplay = () => {
        if (!showingFullDescription) {
            setShowingFullDescription(true)
        } else {
            setShowingFullDescription(false)
        }
    }
    if (!loading){
        const releaseDate = gameDetails.released;
        const year = new Date(gameDetails.released).getFullYear();
        const rpgCount = gameDetails.genres.filter(genre => genre.name === "RPG").length;
            return(
                <>
                <div className="darkBG" onClick={() => changeModal({showingBoolean: false, showingId: null})} />
                <div className="gameDetailsContainer">
                    {!showingFullDescription && (
                    <div id="gameImageContainer" style={{ backgroundImage: `url(${gameDetails.background_image})` }}>
                    <div id="gradientOverlay"></div>
                        <div id="titleComponents">
                            <MyButton id="crossButton" className="transparent" icon={XIcon} onClick={() => changeModal({showingBoolean: false, showingId: null})}/>
                            {renderPlatformIcons()}
                            <h1 id="gameTitle">{gameDetails.name}</h1>
                            <div id="chipsContainer">
                                <MyChips /> <MyChips /> <MyChips />
                            </div>
                        </div>            
                            <div id="bottomContainer">
                                <div id="bottomLeft">
                                    <div id="descriptionContainer">
                                        <p>{gameDetails.description_raw}</p>
                                        <MyButton className="transparent" title="Read more" id={"readMore"} onClick={e => changeDescriptionDisplay()} />
                                    </div>
                                    <div id="buttonsContainer">
                                        <MyButton title="Add to wishlist" className="primaryButton" icon={heartIcon} />
                                        <MyButton title="Purchase" className="secondaryButton" />
                                    </div>
                                    <div id="miscInfoContainer">
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Platforms</p>
                                            <p className="miscInfoValue">{platformsComponent()}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Release date</p>
                                            <p className="miscInfoValue">{gameDetails.released}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Publisher</p>
                                            <p className="miscInfoValue">{publishersComponent()}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Website</p>
                                            <p className="miscInfoValue">{gameDetails.website}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Genre</p>
                                            <p className="miscInfoValue">{genresComponent()}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Developer</p>
                                            <p className="miscInfoValue">{developersComponent()}</p>
                                        </div>
                                        <div className="miscInfoComponent">
                                            <p className="miscInfoTitle">Age rating</p>
                                            <p className="miscInfoValue">{ageRatingComponent()}</p>
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
                                        {movieComponent()}
                                        {imagesComponent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {showingFullDescription && (
                            <>
                            <div id="titleComponents">
                                <MyButton id="crossButton" className="transparent" icon={XIcon} onClick={() => changeModal({showingBoolean: false, showingId: null})}/>
                                {renderPlatformIcons()}
                                <h1 id="gameTitle">{gameDetails.name}</h1>
                                <div id="chipsContainer">
                                    <MyChips /> <MyChips /> <MyChips />
                                </div>
                            </div>
                            <div id="bottomContainer">
                                <div id="descriptionContainerFull">
                                    <p>{gameDetails.description_raw}</p>
                                    <MyButton className="transparent" title="Read less" id={"readLess"} onClick={e => changeDescriptionDisplay()} />
                                </div>
                            </div>
                            </>
                        )}
                        
                </div>
            </>
            );
    } else {
        return 
    }
};

export default MyModal;


/*

AGREGAR UN DIV PARA EL HEADER QUE CONTENGA EL BOTÓN, LOS ÍCONOS, EL TÍTULO Y LOS CHIPS

BOTÓN ALIGN SELF FLEX START
JUSTIFY SELF FLEX END

BOTÓN, ÍCONOS Y CHIPS
ALIGN SELF FLEX END
JUSTIFY SELF FLEX START

*/