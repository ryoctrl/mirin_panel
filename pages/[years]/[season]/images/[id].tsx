import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import { Layout } from 'components/templates';
import { AppContext, Page, SiteInfo } from 'libs';
import { IPagePayload, PageActions } from 'stores/pages';
import { useUsers } from 'hooks';
import ImagePageLayout from 'components/templates/ImagePageLayout';

type Props = {};

function ImagePage() {
  const { userState } = useUsers();
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{SiteInfo.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ImagePageLayout />
      </div>
    </Layout>
  );
}

ImagePage.getInitialProps = async (ctx: AppContext): Promise<Props> => {
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

export default ImagePage;
