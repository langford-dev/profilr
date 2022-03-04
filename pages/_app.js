import "../styles/globals.css";
import { ProfilrProvider } from "../context/profilr.context";

function MyApp({ Component, pageProps }) {
  return (
    <ProfilrProvider>
      <Component {...pageProps} />
    </ProfilrProvider>
  );
}

export default MyApp;
