import React from "react";
import MyCard from "../../components/MyCard";
import MySearchBar from "../../components/MySearchBar/MySearchBar";
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


function Catalog() {
    function hola(){alert("Hola")}
    return (
        <div id="catalogWrapper">
            <div id="catalogMenuWrapper">
                <img id="gameFinderLogo" src={GameFinderLogo}/>
                <MySearchBar id="searchBar" />
                <MyButton title="Log In"/>
                {/* avatar */}
            </div>
            <div id="catalogBodyUpper">
                <div id="catalogBodyUpperLeft">
                    <h1 id="titleLarge">New and trending</h1>
                    <p id="titleSmall">Based on player counts and release date</p>
                </div>
                <div id="catalogBodyUpperRight">
                    <div id="darkModeContainer">
                        <p>Dark mode *switch*</p>
                        {/* switch */}
                    </div>
                    <div id="catalogBodyDisplayButtons">
                        <MyButton icon={Display1} />
                        <MyButton icon={Display2} />
                    </div>
                </div>
            </div>
            <div id="catalogBodyLower">
                <div id="catalogBodyLowerMenu">
                    <MyButton title="Home" className="bodyMenuTitle" />
                    <MyButton title="Reviews" className="bodyMenuTitle" />
                    <h3 className="catalogBodyLowerMenuTitle">New Releases</h3> 
                    <MyButton icon={StarIcon} title="This week" className="bodyMenuOptions" />
                    <MyButton icon={CalendarIcon} title="This month" className="bodyMenuOptions" />
                    <MyButton icon={ClockIcon} title="Coming soon" className="bodyMenuOptions" />
                    <h3 className="catalogBodyLowerMenuTitle">Popular</h3>
                    <MyButton icon={SearchIcon} title="Last searches" className="bodyMenuOptions" />
                    <MyButton icon={ThumbsUpIcon} title="Best of the year" className="bodyMenuOptions" />
                </div>
                <div id="catalogBodyLowerContent">
                    <MyCard size={"small"} />
                    <MyCard size={"small"} />
                    <MyCard size={"small"} />
                    <MyCard size={"small"} />
                </div>
            </div>
        </div>
    )
}
export default Catalog