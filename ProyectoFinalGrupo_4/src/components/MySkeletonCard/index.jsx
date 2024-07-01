import React from "react";
import SkeletonSVG from "../../assets/SkeletonCard.svg";
import LightModeSkeleton from "../../assets/LightModeSkeleton.svg";
import "./index.css";
import { isDarkModeOn } from "../../pages/catalog";

export default function MySkeletonCard() {
    return (
        <div className="skeleton-card">
            <img src={isDarkModeOn() ? SkeletonSVG : LightModeSkeleton    } alt="Loading..." className="skeleton-image" />
        </div>
    );
}