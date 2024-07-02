import React, { useEffect } from 'react';
import "./MyChips.css"

function MyChips({ releaseDate, year, rpgCount, darkMode }) {
    const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    useEffect(() => {
        const applyDarkModeClasses = () => {
            const date = document.querySelector('.date');
            if (darkMode) {
                if (darkMode) {
                    date.forEach(container => {
                        container.classList.add('dark-mode');
                        container.classList.remove('light-mode');
                    })
                } else {
                    date.forEach(container => {
                        container.classList.remove('dark-mode');
                        container.classList.add('light-mode');
                    })
                }
            }
        };
        applyDarkModeClasses();
    }, [darkMode]);

    return (
        <div className="chip">
            <div className="date">{formattedDate}</div>
            <div className="year"><span className="highlight">#1 </span> TOP {year}</div>
            <div className="rpg"><span className="highlight">#{rpgCount}</span> RPG</div>
        </div>
    );
}

export default MyChips;
