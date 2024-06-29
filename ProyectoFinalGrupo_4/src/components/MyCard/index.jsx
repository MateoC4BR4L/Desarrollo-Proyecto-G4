import React, { useEffect } from "react";
import displayPhoto from "../../assets/biomutantpic0044-810x400.jpg"
import WINDOWS from "../../assets/WINDOWS.svg"
import PSN from "../../assets/PSN.svg"
import XBOX from "../../assets/XBOX.svg"
import SWITCH from "../../assets/SWITCH.svg"
import WINDOWSLIGHT from "../../assets/WINDOWSLIGHT.svg"
import PSNLIGHT from "../../assets/PSNLIGHT.svg"
import XBOXLIGHT from "../../assets/XBOXLIGHT.svg"
import SWITCHLIGHT from "../../assets/SWITCHLIGHT.svg"
import './index.css'

function MyCard({ size, title, released, genres, photo, platforms, id, changeModal, darkMode }) {
    
    useEffect(() => {
        const applyDarkModeClasses = () => {
            const cardContainer = document.querySelectorAll('.cardContainer');
            const cardContainerBig = document.querySelectorAll('.cardContainerBig');
            const cardGameTitle = document.querySelectorAll('.cardGameTitle');

            if (darkMode) {
                cardContainer.forEach(title => {
                    title.classList.add('dark-mode');
                    title.classList.remove('light-mode');
                })
                cardContainerBig.forEach(container => {
                    container.classList.add('dark-mode');
                    container.classList.remove('light-mode');
                });
                cardGameTitle.forEach(title => {
                    title.classList.add('dark-mode');
                    title.classList.remove('light-mode');
                })
            } else {
                cardContainer.forEach(title => {
                    title.classList.remove('dark-mode');
                    title.classList.add('light-mode');
                })
                cardContainerBig.forEach(title => {
                    title.classList.remove('dark-mode');
                    title.classList.add('light-mode');
                })
                cardGameTitle.forEach(title => {
                    title.classList.remove('dark-mode');
                    title.classList.add('light-mode');
                })
            }
        };
    
        applyDarkModeClasses();
    }, [darkMode]);

    size = size.toLowerCase();
    
    function genresHandler( genres ){
        const genreGames = genres.map(genre => genre.name).join(',')
        return (genreGames)
    }
    const hasPlatform = (slug) => {
        return platforms.some(platform => platform.platform.slug === slug);
    };

    const renderPlatformIcons = () => {
        return (
            <div className={'iconsContainer'}>
                {hasPlatform('pc') && <img src={darkMode ? WINDOWS: WINDOWSLIGHT} id="windows" alt="Windows" />}
                {hasPlatform('playstation') && <img src={darkMode ? PSN : PSNLIGHT} id="psn" alt="PlayStation" />}
                {hasPlatform('xbox') && <img src={darkMode ? XBOX : XBOXLIGHT} id="xbox" alt="Xbox" />}
                {hasPlatform('nintendo') && <img src={darkMode ? SWITCH : SWITCHLIGHT} id="switch" alt="Switch" />}
            </div>
        );
    };

    if (size === "small") {
        return (
            <div className="cardContainer" id={`gameContainer${id}`} onClick={e => changeModal({showingBoolean: true, showingId: id})}>
                    <img className="cardGameDisplay" src={photo} alt={title} />
                    <div className="cardInnerTitleContainerSmall">
                        <h1 className="cardGameTitle">{title}</h1>
                        <h1 className="cardGameNumber">#1</h1>
                    </div>
                    <div className="cardInnerBottomContainerSmall">
                        <div className="cardInnerBottomUpperSmall">
                            <p id="releaseDate">Release date:</p>
                            <p id="date">{released}</p>
                            {renderPlatformIcons()}
                        </div>
                        <div className="cardInnerBottomLowerSmall">
                            <p id="genre">Genre:</p>
                            <p id="tags">{genresHandler(genres)}</p>
                        </div>
                    </div>
            </div>
        );
    } else if (size === "big") {
        return (
            <div className="cardContainerBig" id={`gameContainer${id}`} onClick={e => changeModal({showingBoolean: true, showingId: id})}>
                <img className="cardGameDisplayBig" src={photo} alt={title}/>
                <div className="cardInnerTitleContainerBig">
                    <h1 className="cardGameTitleBig">{title}</h1>
                    <h1 className="cardGameNumberBig">#1</h1>
                </div>
                <div className="cardInnerInfoContainerBig">
                        <div className="cardInnerInfoContainerTextBig">
                            <div className="dateBig">
                                <p id="releaseDate">Release date:</p>
                                <p id="date">{released}</p>
                            </div>
                            <div className="genreBig">
                                <p id="genre">Genre:</p>
                                <p id="tags">{genresHandler(genres)}</p>
                            </div>
                            <div className="iconsBig">
                                {renderPlatformIcons()}
                            </div>
                            
                        </div>
                        
                        <div className="cardInnerInfoContainerBodyBig">
                           
                        </div>
                </div>
            </div>
        )
    }
}
export default MyCard;

