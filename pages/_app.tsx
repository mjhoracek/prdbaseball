import Head from "next/head";
import type { NextPage } from "next";
import { MantineProvider } from "@mantine/core";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: any) => {
  const getLayout = Component.getLayout || ((page: NextPage) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

const Providers = ({ Component, pageProps }: any) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <App Component={Component} pageProps={pageProps} />
    </MantineProvider>
  );
};

export default Providers;
