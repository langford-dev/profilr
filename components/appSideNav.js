import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnalyticsIcon, BellIcon, CompassIcon, Create, HomeIcon, ProfileIcon, SettingsIcon, ShieldIcon } from "../assets/icons";
import { ThemeToggle } from "./themeToggle";
import { useRouter } from 'next/router'

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
            <h3>Profilr</h3>

            <div>
                <Link href="/">
                    <div className={currentRoute === "/" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/explore">
                    <div className={currentRoute === "/explore" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <CompassIcon />
                        <p>Explore</p>
                    </div>
                </Link>
                <Link href="/create">
                    <div className={currentRoute === "/create" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <Create />
                        <p>Create New</p>
                    </div>
                </Link>
                <Link href="/settings">
                    <div className={currentRoute === "/settings" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <SettingsIcon />
                        <p>Settings</p>
                    </div>
                </Link>
                <Link href="/upgrade">
                    <div className={currentRoute === "/upgrade" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <ShieldIcon />
                        <p>Upgrade</p>
                    </div>
                </Link>
                <Link href="/analytics">
                    <div className={currentRoute === "/analytics" ? "side-nav-btn active-side-nav-btn" : "side-nav-btn"}>
                        <AnalyticsIcon />
                        <p>Analytics</p>
                    </div>
                </Link>
            </div>

            <div className="flex-column-between">
                <BellIcon />
                <div className="space-50"></div>
                <ProfileIcon />
                <div className="space-50"></div>
                <ThemeToggle />
            </div>
        </div>
    </div >
}

export default AppSideNav