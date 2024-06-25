import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import MyCard from "../../components/MyCard";
import MyButton from "../../components/MyButton/MyButton";
import "./index.css"
import GameFinderLogo from "../../assets/White.svg"
import Display1 from "../../assets/ThumbnailsActive.svg"
import Display2 from "../../assets/Disabled.svg"
import Display1Light from "../../assets/ThumbnailsActiveLightMode.svg"
import Display2Light from "../../assets/DisabledLightMode.svg"
import StarIcon from "../../assets/Star.svg"
import CalendarIcon from "../../assets/Calendar.svg"
import ClockIcon from "../../assets/Clock.svg"
import SearchIcon from "../../assets/Search.svg"
import ThumbsUpIcon from "../../assets/Thumbs Up.svg"
import { MyAvatar } from "../../components/MyAvatar";
import { MySwitch } from "../../components/MySwitch";
import MyDropdown from "../../components/MyDropdown/MyDropdown.jsx"
import { getGames } from "../../../api/api.ts";
import MyModal from "../../components/MyModal/MyModal.jsx";
import MyLogOut from "../../components/MyLogOut/index.jsx";
import MySkeletonCard from "../../components/MySkeletonCard/index.jsx";

function Catalog() {
    const [darkMode, setDarkMode] = useState(true); // Modo oscuro predeterminado
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showingModal, changeModal] = useState({showingBoolean: false, showingId: null})
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getGamesPayload = async () => {
            try {
                const newGames = await getGames();
                setGames(newGames);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        getGamesPayload();
    }, []);

    useEffect(() => {
        const applyDarkModeClasses = () => {
            const catalogWrapper = document.getElementById('catalogWrapper');
            const bodyMenuTitles = document.querySelectorAll('.bodyMenuTitle');
            const bodyMenuOptions = document.querySelectorAll('.bodyMenuOptions');
            const catalogBodyLower = document.getElementById('catalogBodyLower');

            if (darkMode) {
                catalogWrapper.classList.add('dark-mode');
                catalogWrapper.classList.remove('light-mode');

                catalogBodyLower.classList.add('dark-mode');
                catalogBodyLower.classList.remove('light-mode');

                bodyMenuTitles.forEach(title => {
                    title.classList.add('dark-mode');
                    title.classList.remove('light-mode');
                });
    
                bodyMenuOptions.forEach(option => {
                    option.classList.add('dark-mode');
                    option.classList.remove('light-mode');
                });
            } else {
                catalogWrapper.classList.remove('dark-mode');
                catalogWrapper.classList.add('light-mode');

                catalogBodyLower.classList.remove('dark-mode');
                catalogBodyLower.classList.add('light-mode');
    
                bodyMenuTitles.forEach(title => {
                    title.classList.remove('dark-mode');
                    title.classList.add('light-mode');
                });
    
                bodyMenuOptions.forEach(option => {
                    option.classList.remove('dark-mode');
                    option.classList.add('light-mode');
                });
            }
        };
    
        applyDarkModeClasses();
    }, [darkMode]);    

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    function showGameInfo(){
        console.log(games)
    }

    const handleLogout = () => {
        setShowLogout(false);
        navigate('/login');
    };

    return (
        <div id="catalogWrapper">
            <div id="catalogMenuWrapper">
                <img id="gameFinderLogo" src={GameFinderLogo}/>
                <MyDropdown id="searchBar" />
                <div id="logOut">
                    <MyButton title="Log out" className={"transparent"} onClick={() => setShowLogout(true)} />
                    <MyAvatar />
                </div>
            </div>
            <div id="catalogBodyUpper">
                <div id="catalogBodyUpperLeft">
                    <h1 id="titleLarge">New and trending</h1>
                    <p id="titleSmall">Based on player counts and release date</p>
                </div>
                <div id="catalogBodyUpperRight">
                    <div id="darkModeContainer">
                        <p id="darkModeText">Dark mode</p>
                        <MySwitch checked={darkMode} onChange={toggleDarkMode} />
                    </div>
                    <div id="catalogBodyDisplayButtons">
                        <MyButton icon={darkMode ? Display1 : Display1Light} className={"transparent"} />
                        <MyButton icon={darkMode ? Display2 : Display2Light} className={"transparent"} />
                    </div>
                </div>
            </div>
            <div id="catalogBodyLower">
                <div id="catalogBodyLowerMenu">
                    <MyButton title="Home" className="bodyMenuTitle"/>
                    <MyButton title="Reviews" className="bodyMenuTitle" />
                    <h3 className="catalogBodyLowerMenuTitle">New Releases</h3> 
                    <MyButton icon={StarIcon} title="This week" className="bodyMenuOptions" />
                    <MyButton icon={CalendarIcon} title="This month" className="bodyMenuOptions" />
                    <MyButton icon={ClockIcon} title="Coming soon" className="bodyMenuOptions" />
                    <h3 className="catalogBodyLowerMenuTitle">Popular</h3>
                    <MyButton icon={SearchIcon} title="Last searches" className="bodyMenuOptions" />
                    <MyButton icon={ThumbsUpIcon} title="Best of the year" className="bodyMenuOptions" onClick={e => showGameInfo()}/>
                </div>
                <div id="catalogBodyLowerContent">
                    {loading
                        ? Array.from({ length: 10 }).map((_, index) => (
                            <MySkeletonCard key={index} />
                        ))
                        : games.map((g) => (
                            <MyCard
                                key={g.id}
                                size={"small"}
                                title={g.name}
                                released={g.released}
                                genres={g.genres}
                                photo={g.background_image}
                                platforms={g.parent_platforms}
                                id={g.id}
                                changeModal={changeModal}
                                darkMode={darkMode}
                            />
                        ))}
                </div>
            </div>
            {showingModal.showingBoolean && <MyModal showingModal={showingModal} changeModal={changeModal} />}
            {showLogout && <MyLogOut isOpen={showLogout} onClose={() => setShowLogout(false)} onLogout ={handleLogout}/>}
        </div>
    )
}
export default Catalog