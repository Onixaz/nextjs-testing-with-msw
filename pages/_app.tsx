import React from "react";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import store from "@redux/store";

import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@styles/theme";
import createEmotionCache from "../src/styles/createEmotionCache";


if (process.env.NODE_ENV === 'test') {
  require('../mocks');
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ReduxProvider store={store}>
      <AuthProvider session={pageProps.session}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

