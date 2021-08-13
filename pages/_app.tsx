import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// After installation complete. Then import bootstrap CSS file into the next js custom pages/_app.js.
// Note:
// The custom app components always render to every page. So that your bootstrap CSS file available for every page.

//error handling*****