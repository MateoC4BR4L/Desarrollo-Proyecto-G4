import { getGameById } from "../../../api/api";
import App from "../../App";
import MyButton from "../MyButton/MyButton";
import "./MyModal.css"
import React, { useEffect, useState } from "react";
import XIcon from "../../assets/X.svg"

function MyModal({ showingModal, changeModal }){
    const [gameDetails, setGameDetails] = useState([])

    useEffect(() => {
        const getGameDetails = async () =>{
            try {
                const newGameDetails = await getGameById(showingModal.showingId)
                setGameDetails(newGameDetails)
            } catch (error) {
                console.error(`Error fetching game with id ${id} details:`, error)
            }
        }

        if (showingModal.showingId) {
            getGameDetails()
        }

    }, [showingModal.showingId])

    return(
        <>
        <div className="darkBG" onClick={() => changeModal({showingBoolean: false, showingId: null})} />
        <div className="modal" onClick={e => console.log(showingModal.id)}>
            <div id="gameImageContainer">
                <img id="gameImage" src={gameDetails.background_image} />
                <MyButton className="transparent" icon={XIcon} onClick={() => changeModal({showingBoolean: false, showingId: null})}/>
            </div>
        </div>
        </>
    );
};

export default MyModal;