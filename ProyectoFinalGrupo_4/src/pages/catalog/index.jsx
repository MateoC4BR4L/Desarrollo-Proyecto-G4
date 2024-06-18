import React, { useEffect, useState } from "react";
import MyCard from "../../components/MyCard";
import MyButton from "../../components/MyButton/MyButton";
import "./index.css"
import GameFinderLogo from "../../assets/White.svg"
import Display1 from "../../assets/ThumbnailsActive.svg"
import Display2 from "../../assets/Disabled.svg"
import StarIcon from "../../assets/Star.svg"
import CalendarIcon from "../../assets/Calendar.svg"
import ClockIcon from "../../assets/Clock.svg"
import SearchIcon from "../../assets/Search.svg"
import ThumbsUpIcon from "../../assets/Thumbs Up.svg"
import { MyAvatar } from "../../components/MyAvatar";
import { MySwitch } from "../../components/MySwitch";
import MyDropdown from "../../components/MyDropdown/MyDropdown.jsx"
import { getGames } from "../../../api/api.ts";

function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGamesPayload = async () => {
            try {
                const newGames = await getGames();
                setGames(newGames);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        getGamesPayload();
    }, []);
    function showGameInfo(){
        console.log(games)
    }
    return (
        <div id="catalogWrapper">
            <div id="catalogMenuWrapper">
                <img id="gameFinderLogo" src={GameFinderLogo}/>
                <MyDropdown id="searchBar" />
                <MyButton title="Log out" className={"transparent"}/>
                <MyAvatar />
            </div>
            <div id="catalogBodyUpper">
                <div id="catalogBodyUpperLeft">
                    <h1 id="titleLarge">New and trending</h1>
                    <p id="titleSmall">Based on player counts and release date</p>
                </div>
                <div id="catalogBodyUpperRight">
                    <div id="darkModeContainer">
                        <p id="darkModeText">Dark mode</p>
                        <MySwitch />
                    </div>
                    <div id="catalogBodyDisplayButtons">
                        <MyButton icon={Display1} className={"transparent"} />
                        <MyButton icon={Display2} className={"transparent"} />
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
                    {games.map((g) => {
                        return (<MyCard size={"small"} title={g.name} released={g.released} genres={g.genres} />)
                    })}
                </div>
            </div>
        </div>
    )
}
export default Catalog