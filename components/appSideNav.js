import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnalyticsIcon, BellIcon, CompassIcon, Create, HomeIcon, PaintBrushIcon, ProfileIcon, SettingsIcon, ShieldIcon } from "../assets/icons";
import { ThemeToggle } from "./themeToggle";
import { useRouter } from 'next/router'
import Image from "next/image";

const AppSideNav = () => {
    const router = useRouter()

    const [currentRoute, setCurrentRoute] = useState('')

    useEffect(() => {

        setCurrentRoute(window.location.pathname)

        router.events.on('routeChangeComplete', (url, { shallow }) => {
            console.log(`App is Changed to ${url}`)
        })

    }, [])


    return <div className='side-nav'>
        <div className='side-nav-wrapper'>
            {/* <h3>Profilr</h3> */}

            <Image src='https://res.cloudinary.com/nimmble/image/upload/v1646519116/gdf-removebg-preview_1_or91ud.png' width="90px" height="75px" />

            <div>
                <Link passHref={true} href="/">
                    <div className={currentRoute === "/" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <AnalyticsIcon />
                        <p>Dashboard</p>
                    </div>
                </Link>
                {/* <Link passHref={true} href="/explore">
                    <div className={currentRoute === "/explore" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <CompassIcon />
                        <p>Explore</p>
                    </div>
                </Link> */}

                {/* <Link passHref={true} href="/analytics">
                    <div className={currentRoute === "/analytics" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <AnalyticsIcon />
                        <p>Analytics</p>
                    </div>
                </Link> */}
                <Link passHref={true} href="/appearance">
                    <div className={currentRoute === "/appearance" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <PaintBrushIcon />
                        <p>Appearance</p>
                    </div>
                </Link>
                <Link passHref={true} href="/edit">
                    <div className={currentRoute === "/create/home" || currentRoute === '/edit' || currentRoute === "/create/step-1" || currentRoute === "/create/step-2" || currentRoute === "/create/step-3" || currentRoute === '/preview' ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <Create />
                        <p>Edit profile</p>
                    </div>
                </Link>
                <Link passHref={true} href="/settings">
                    <div className={currentRoute === "/settings" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <SettingsIcon />
                        <p>Settings</p>
                    </div>
                </Link>
                <Link passHref={true} href="/upgrade">
                    <div className={currentRoute === "/upgrade" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <ShieldIcon />
                        <p>Upgrade</p>
                    </div>
                </Link>
            </div>

            <div className="flex-column-between">
                {/* <div className="with-badge-container">
                    <div className="badge-num">9</div>
                    <BellIcon />
                </div>
                <div className="space-50"></div>
                <ProfileIcon /> */}
                <div className="space-50"></div>
                <ThemeToggle />
            </div>
        </div>
    </div >
}

export default AppSideNav