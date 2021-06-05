import Head from "next/head";
import "../utils/globals.css";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Boilerplate</title>
      <meta name="description" content="boilerplate" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);
export default App;
