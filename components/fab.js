import React from "react";
import { Create, Download, Share } from "../assets/icons";

const Fab = () => {
    return <div className="fab-container">
        <div className="fab-btn"><Share /></div>
        <div className="fab-btn"><Create /></div>
        <div className="fab-btn"><Download /></div>
    </div>
}

export default Fab