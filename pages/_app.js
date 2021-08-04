import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Head>
        <script src="https://mynaconnect-lib.netlify.app/mynaconnect.js"></script>
      </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp;
