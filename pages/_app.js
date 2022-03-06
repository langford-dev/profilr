import "../styles/globals.css";
import ProfilrContext from "../context/appContext";
import { useState, useEffect } from "react";
import '../styles/style-1.css'

function MyApp({ Component, pageProps }) {
  const [appWindow, setAppWindow] = useState();

  useEffect(() => {

    setAppWindow(window)

    return () => { }
  }, [appWindow])

  const formatUsername = (str) => {
    return str.trim().replace(/[&\/\\#{},}+(-=)*&^%$#!@)$~%.'"|^:*?<>{}]/g, '').trim()
  }

  return (
    <ProfilrContext.Provider
      value={{
        appWindow,
        formatUsername
      }}>
      <Component {...pageProps} />
    </ProfilrContext.Provider>
  );
}

export default MyApp;
