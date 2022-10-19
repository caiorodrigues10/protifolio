import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AllThentic</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="AllThentic" />
        <meta name="description" content="AllThentic" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
      user-scalable=0"
        />
        {/* <link rel="icon" href="/images/allthenticIcon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
