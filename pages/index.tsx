import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import { Layout } from 'components/templates';
import { AppContext, Page, SiteInfo } from 'libs';
import { IPagePayload, PageActions } from 'stores/pages';
import { Typography } from '@material-ui/core';
import { useUsers } from 'hooks';

type Props = {};

function Top() {
  const { userState } = useUsers();
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{SiteInfo.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>{SiteInfo.SITE_NAME}</h1>
        <Typography variant="h5">Hello, {userState.name}</Typography>
      </div>
    </Layout>
  );
}

Top.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx;

  const pagePayload: IPagePayload = {
    selectedPage: Page.TOP,
  };
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  });
  return {};
};

export default Top;
