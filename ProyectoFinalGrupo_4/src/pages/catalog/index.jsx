import React from "react";
import MyCard from "../../components/MyCard";
import MySearchBar from "../../components/MySearchBar/MySearchBar";
import MyButton from "../../components/MyButton/MyButton";

function Catalog() {
    return (
        <div id="catalogWrapper">
            <div id="catalogMenuWrapper">
                <img id="gameFinderLogo"/> {/* gamefinder logo */}
                <MySearchBar />
                <MyButton title="Log In"/>
                {/* avatar */}
            </div>
            <div id="catalogBodyUpper">
                <div id="catalogBodyUpperLeft">
                    <h1>New and trending</h1>
                    <p>Based on player counts and release date</p>
                </div>
                <div id="catalogBodyUpperRight">
                    <div id="darkModeContainer">
                        <p>Dark mode</p>
                        {/* switch */}
                    </div>
                    <div id="catalogBodyDisplayButtons">
                        <MyButton title="option 1" />
                        <MyButton title="option 2" />
                    </div>
                </div>
            </div>
            <div id="catalogBodyLower">
                <div id="catalogBodyLowerMenu">
                    <MyButton title="Home" />
                    <MyButton title="Reviews" />
                    <h3>New Releases</h3> 
                    <MyButton title="*logo* This week" />
                    <MyButton title="*logo* This month" />
                    <MyButton title="*logo* Coming soon" />
                    <h3>Popular</h3>
                    <MyButton title="*logo* Last searches" />
                    <MyButton title="*logo* Best of the year" />
                </div>
            </div>
        </div>
    )
}
export default Catalog