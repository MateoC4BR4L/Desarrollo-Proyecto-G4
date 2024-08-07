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
import Thumbnails from "../../assets/ThumbnailsDisabled.svg"
import ThumbnailsLight from "../../assets/ThumbnailsDisabledLightMode.svg"
import Active from "../../assets/Active.svg"
import ActiveLight from "../../assets/ActiveLightMode.svg"
import { MyAvatar } from "../../components/MyAvatar";
import { MySwitch } from "../../components/MySwitch";
import MyDropdown from "../../components/MyDropdown/MyDropdown.jsx"
import { getGames, getGamesWithDate } from "../../../api/api.ts";
import MyModal from "../../components/MyModal/MyModal.jsx";
import MyLogOut from "../../components/MyLogOut/index.jsx";
import MySkeletonCard from "../../components/MySkeletonCard/index.jsx";

function Catalog() {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode !== null ? JSON.parse(storedDarkMode) : true;
      });

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showingModal, changeModal] = useState({showingBoolean: false, showingId: null})
    const [showLogout, setShowLogout] = useState(false);
    const [size, setSize] = useState('small');
    const [activeButton, setActiveButton] = useState('small');
    const navigate = useNavigate();
    const today = new Date()
    

    const getGamesPayload = async () => {
        try {
            const newGames = await getGames();
            setGames(newGames);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };
    
    useEffect(() => {
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
                localStorage.setItem('darkMode', 'true');
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
                localStorage.setItem('darkMode', 'false');
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
        navigate('/');
    };

    const smallCard = () => {
        setSize('small');
        setActiveButton ('small');
    };

    const bigCard = () => {
        setSize('big');
        setActiveButton ('big');
    };

    const getWeeklyGames = async () => {
        const lastWeek = new Date()
        lastWeek.setDate(today.getDate() - 7)
        const date1 = lastWeek.getFullYear() + "-" + String(lastWeek.getMonth() + 1).padStart(2, '0') + "-" + String(lastWeek.getDate()).padStart(2, '0')
        const date2 = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
        setLoading(true)
        try {
            const newGames = await getGamesWithDate(date1, date2)
            setGames(newGames)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching games: ", error)
        }
    }
    
    const getMonthlyGames = async () => {
        const lastMonth = new Date()
        lastMonth.setMonth(lastMonth.getMonth() - 1)
        const date1 = lastMonth.getFullYear() + "-" + String(lastMonth.getMonth() + 1).padStart(2, '0') + "-" + String(lastMonth.getDate()).padStart(2, '0')
        const date2 = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
        setLoading(true)
        try {
            const newGames = await getGamesWithDate(date1, date2)
            setGames(newGames)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching games: ", error)
        }
    }

    const getYearlyGames = async () => {
        const firstOfYear = new Date()
        firstOfYear.setMonth(1)
        firstOfYear.setDate(1)
        const date1 = firstOfYear.getFullYear() + "-" + String(firstOfYear.getMonth()).padStart(2, '0') + "-" + String(firstOfYear.getDate()).padStart(2, '0')
        const date2 = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
        setLoading(true)
        try {
            const newGames = await getGamesWithDate(date1, date2)
            setGames(newGames)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching games: ", error)
        }
    }

    const getComingSoonGames = async () => {
        const date1 = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
        const date2 = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
        try {
            const newGames = await getGamesWithDate(date1, date2);
            setGames(newGames);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    }

    return (
        <div id="catalogWrapper">
            <div id="catalogMenuWrapper">
                <img id="gameFinderLogo" src={GameFinderLogo}/>
                <MyDropdown id="searchBar" games={games} />
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
                        <MyButton 
                            icon={activeButton === 'small' ? (darkMode ? Display1 : Display1Light) : (darkMode ? Thumbnails : ThumbnailsLight)} 
                            className="transparent" 
                            onClick={smallCard}
                        />
                        <MyButton 
                            icon={activeButton === 'big' ? (darkMode ? Active : ActiveLight) : (darkMode ? Display2 : Display2Light)} 
                            className="transparent" 
                            onClick={bigCard}
                        />
                    </div>
                </div>
            </div>
            <div id="catalogBodyLower">
                <div id="catalogBodyLowerMenu">
                    <MyButton title="Home" className="bodyMenuTitle" onClick={e => getGamesPayload()}/>
                    <MyButton title="Reviews" className="bodyMenuTitle" />
                    <h3 className="catalogBodyLowerMenuTitle">New Releases</h3> 
                    <MyButton icon={StarIcon} title="This week" className="bodyMenuOptions" onClick={e => getWeeklyGames()} />
                    <MyButton icon={CalendarIcon} title="This month" className="bodyMenuOptions" onClick={e => getMonthlyGames()} />
                    <MyButton icon={ClockIcon} title="Coming soon" className="bodyMenuOptions" onClick={e => getComingSoonGames()} />
                    <h3 className="catalogBodyLowerMenuTitle">Popular</h3>
                    <MyButton icon={SearchIcon} title="Last searches" className="bodyMenuOptions" />
                    <MyButton icon={ThumbsUpIcon} title="Best of the year" className="bodyMenuOptions" onClick={e => getYearlyGames()}/>
                </div>
                <div id={size === 'small' ? 'catalogBodyLowerContent' : 'catalogBodyLowerContentBig'}>
                    {/*style={activeButton === 'small' ? catalogBodyLowerContent : catalogBodyLowerContentBig}*/}
                    {loading
                        ? Array.from({ length: 10 }).map((_, index) => (
                            <MySkeletonCard 
                                key={index} 
                            />
                        ))
                        : games.map((g) => (
                            <MyCard
                                key={g.id}
                                size={size}
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
            {showingModal.showingBoolean && <MyModal showingModal={showingModal} changeModal={changeModal} darkMode={darkMode}/>}
            {showLogout && <MyLogOut isOpen={showLogout} onClose={() => setShowLogout(false)} onLogout ={handleLogout}/>}
        </div>
    )
}

export default Catalog

export function isDarkModeOn() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}