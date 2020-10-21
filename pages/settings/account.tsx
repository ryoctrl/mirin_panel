import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import { Layout } from 'components/templates';
import { AppContext, Page, SiteInfo } from 'libs';
import { IPagePayload, PageActions } from 'stores/pages';
import { useUsers } from 'hooks';
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useRouter } from 'next/router';

type Props = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  })
);

function AccountSettings(props) {
  const classes = useStyles(props);
  const { userState, logout } = useUsers();

  if (!userState.userName && typeof window !== 'undefined') {
    const router = useRouter();
    router.push('/login');
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{SiteInfo.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>アカウント設定のページ</h1>
        <Box mt="1rem">
          <Button className={classes.loginButton} onClick={logout}>
            ログアウト
          </Button>
        </Box>
      </div>
    </Layout>
  );
}

AccountSettings.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx;

  const selectedPage = { ...Page.ACCOUNT_SETTINGS };
  delete selectedPage.parentPage;

  const pagePayload: IPagePayload = {
    selectedPage,
  };

  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  });
  return {};
};

export default AccountSettings;
