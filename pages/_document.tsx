import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import flush from 'styled-jsx/server';
import { AppContext, MuiTheme, Page } from 'libs';

type Props = {
  pageProps: any;
};

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    const page = Page.values.filter((p) => p.relativeUrl === ctx.pathname);

    return {
      ...initialProps,
      pageProps: {
        page: { selectedPage: page.length !== 0 ? page[0] : Page.TOP },
      },
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    };
  };

  render() {
    const { pageProps } = this.props;
    const page = pageProps.page.selectedPage;

    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={MuiTheme.palette.primary.main} />
          <meta name="description" content={page.metaDescription} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
