import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { MenuIcon } from "../assets/icons";

const AppHeader = () => {
    return <header>
        <div className="header-wrapper app-header-wrapper">
            <div className="flex">
                <div className="logo"> Profilr </div>

                <nav>
                    <div className="active-nav"><Link passHref={true} href="#">Home</Link></div>
                    <div><Link passHref={true} href="#about-me">Appearance</Link></div>
                    <div> <Link passHref={true} href="#my-works">Settings</Link></div>
                    <div> <Link passHref={true} href="#my-works">Analytics</Link></div>
                    <div><Link passHref={true} href="#">Upgrade</Link></div>
                </nav>
            </div>

            <div className="flex">
                <div className="theme-toggle"><ThemeToggle /></div>
                <div className="space-20" />
                <div className="hide-desktop"><MenuIcon /></div>
                <div className="avatar-sm"></div>
            </div>
        </div>
    </header>
}

export default AppHeader