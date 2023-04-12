import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ag-grid-community@29.2.0/styles/ag-grid.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ag-grid-community@29.2.0/styles/ag-theme-alpine.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
