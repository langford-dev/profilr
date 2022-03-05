import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { MenuIcon } from "../assets/icons";

const ProfileHeader = () => {
    return <header>
        <div className="header-wrapper">
            <div className="logo"> {`>langford.dev`} </div>

            <nav>
                <Link passHref={true} href="#">Home</Link>
                <Link passHref={true} href="#about-me">About</Link>
                <Link passHref={true} href="#my-works">My works</Link>
                <Link passHref={true} href="#">Find me</Link>
            </nav>

            <div className="theme-toggle"> <ThemeToggle /></div>
            <div className="hide-desktop"><MenuIcon /></div>
        </div>
    </header>
}

export default ProfileHeader