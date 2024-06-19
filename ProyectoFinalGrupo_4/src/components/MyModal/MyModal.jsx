import { getGameById } from "../../../api/api";
import App from "../../App";
import "./MyModal.css"
import React, { useEffect, useState } from "react";

function MyModal({ title, showingModal, changeModal }){
    const [gameDetails, setGameDetails] = useState([])

    useEffect(() => {
        const getGameDetails = async () =>{
            try {
                const newGameDetails = await getGameById(showingModal.showingId)
                setGameDetails(newGameDetails)
                console.log(newGameDetails)
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
        <div className="centered modal" onClick={e => console.log(showingModal.id)}>
            <div className="modalHeader">
                <h5 className="heading">{showingModal.showingId}</h5>
            </div>
        </div>
        </>
    );
};

export default MyModal;