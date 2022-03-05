import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { MenuIcon } from "../assets/icons";

const ProfileHeader = () => {
    return <header>
        <div className="header-wrapper">
            <div className="logo"> {`>langford.dev`} </div>

            <nav>
                <Link href="#">Home</Link>
                <Link href="#about-me">About</Link>
                <Link href="#my-works">My works</Link>
                <Link href="#">Find me</Link>
            </nav>

            <div className="theme-toggle"> <ThemeToggle /></div>
            <div className="hide-desktop"><MenuIcon /></div>
        </div>
    </header>
}

export default ProfileHeader