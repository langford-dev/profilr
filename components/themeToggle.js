import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [appWindow, setAppWindow] = useState();

    useEffect(() => {
        setAppWindow(window)

        if (defaultDark) {
            setDark();
            setIsDark(true)
        }

        return () => { }
    }, [appWindow])

    const setDark = () => {
        appWindow && appWindow ? localStorage.setItem("theme", "dark") : null;
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        appWindow && appWindow ? localStorage.setItem("theme", "light") : null;
        document.documentElement.setAttribute("data-theme", "light");
    };

    const storedTheme = appWindow && appWindow ? localStorage.getItem("theme") : "light";

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