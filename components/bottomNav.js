import Link from "next/link";
import React from "react";
import { AnalyticsIcon, Create, PaintBrushIcon, SettingsIcon, ShieldIcon } from "../assets/icons";

const BottomNav = () => {
    return <div className="bottom-nav">
        <ul className="bottom-nav-wrapper">
            <Link href='/account/home'><div><AnalyticsIcon /></div></Link>
            <Link href='/account/settings'><div><PaintBrushIcon /></div></Link>
            <Link href='/account/edit'><div><Create /></div></Link>
            <Link href='/account/upgrade'><div><ShieldIcon /></div></Link>
            <Link href='/account/settings'><div><SettingsIcon /></div></Link>
        </ul>
    </div>
}

export default BottomNav