import "../styles/globals.css";
import ProfilrContext from "../context/appContext";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [appWindow, setAppWindow] = useState();

  useEffect(() => {

    setAppWindow(window)

    return () => { }
  }, [appWindow])


  return (
    <ProfilrContext.Provider
      value={{
        appWindow
      }}>
      <Component {...pageProps} />
    </ProfilrContext.Provider>
  );
}

export default MyApp;
