import App from "../../App";
import React, { useEffect, useState } from "react";
import './MyChips.css'

function MyChips() {
    const gameDate = new Date(uploadDate).toLocaleDateString()

    return (
        <div className="Chips">
            {gameDate}
        </div>
    )
}

export default MyChips;


/*
import React, { useEffect, useState } from "react";

function MyChips() {
    const [uploadDate, setUploadDate] = useState(null);

    useEffect(() => {
        // Simula una llamada a una API para obtener la fecha
        async function fetchUploadDate() {
            // Aquí harías la llamada real a la API
            const response = await fetch("https://api.example.com/upload-date");
            const data = await response.json();
            setUploadDate(data.uploadDate);
        }

        fetchUploadDate();
    }, []);

    // Formatea la fecha recibida
    const formattedDate = uploadDate ? new Date(uploadDate).toLocaleDateString() : "Loading...";

    return (
        <div className="Chips">
            {Muestra la fecha formateada }
            {formattedDate}
        </div>
    );
}

export default MyChips;

*/