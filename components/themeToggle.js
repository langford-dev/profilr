import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";
// import Toggle from "react-toggle";
// import "react-toggle/style.css"

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [appWindow, setAppWindow] = useState();

    useEffect(() => {
        setAppWindow(window)

        setDark();
        setIsDark(true)

        return () => { }
    }, [appWindow])

    const setDark = () => {
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        document.documentElement.setAttribute("data-theme", "light");
    };

    const storedTheme = 'dark';

    const prefersDark =

        appWindow && appWindow ? appWindow.matchMedia &&
            appWindow.matchMedia("(prefers-color-scheme: dark)").matches : null;


    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    const toggleTheme = (val) => {
        setIsDark(!isDark)

        if (val) setDark();
        else setLight();
    };

    return (
        <div>
            {
                !isDark ?
                    <div onClick={() => toggleTheme(true)}><MoonIcon /></div>
                    : <div onClick={() => toggleTheme(false)}><SunIcon /></div>

            }
        </div>
    );
};