import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import { Layout } from 'components/templates';
import { AppContext, Page, SiteInfo } from 'libs';
import { IPagePayload, PageActions } from 'stores/pages';
import { useUsers } from 'hooks';
import TopPageLayout from '../components/templates/TopPageLayout';

type Props = {};

function Top() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{SiteInfo.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopPageLayout />
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
