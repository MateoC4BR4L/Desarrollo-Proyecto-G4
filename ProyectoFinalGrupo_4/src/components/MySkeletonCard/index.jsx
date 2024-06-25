import React from "react";
import SkeletonSVG from "../../assets/SkeletonCard.svg";
import "./index.css";

export default function MySkeletonCard() {
    return (
        <div className="skeleton-card">
            <img src={SkeletonSVG} alt="Loading..." className="skeleton-image" />
        </div>
    );
}