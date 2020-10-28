import React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from 'stores/store';
import { ConnectedRouter } from 'connected-next-router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { MuiTheme } from 'libs';
import 'styles/globals.scss';
import Head from 'next/head';
import { Alert } from 'components/organisms';
import { ExhibitionsActions } from 'stores/exhibitions';

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const { store } = ctx;

    //全ページ共通のdisptachアクションはページのgetInitialPropsを実行する前に実行しておく。
    store.dispatch({
      type: ExhibitionsActions.fetchYears.toString(),
      payload: {},
    });

    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={MuiTheme}>
        <ConnectedRouter>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />;
          <Alert />
        </ConnectedRouter>
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
