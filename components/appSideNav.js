import React from "react";
import { BellIcon, Create, SettingsIcon } from "../assets/icons";

const AppSideNav = () => {
    return <div className='side-nav'>
        <div className='side-nav-wrapper'>
            <div className="side-nav-btn">
                <BellIcon />
                <p>Notifications</p>
            </div>
            <div className="side-nav-btn">
                <Create />
                <p>Create New</p>
            </div>
            <div className="side-nav-btn">
                <SettingsIcon />
                <p>Settings</p>
            </div>
        </div>
    </div>
}

export default AppSideNav