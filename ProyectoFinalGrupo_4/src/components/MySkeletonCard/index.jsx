import React from "react";
import SkeletonSVG from "../../assets/SkeletonCard.svg";
import LightModeSkeleton from "../../assets/LightModeSkeleton.svg";
import "./index.css";

export default function MySkeletonCard({darkMode}) {
    return (
        <div className="skeleton-card">
            <img src={darkMode ? SkeletonSVG : LightModeSkeleton    } alt="Loading..." className="skeleton-image" />
        </div>
    );
}