import React, { useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import { Layout } from 'components/templates';
import { AppContext, Page, SiteInfo, Strings } from 'libs';
import { IPagePayload, PageActions } from 'stores/pages';
import {
  Box,
  Button,
  createStyles,
  Input,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useUsers } from 'hooks';

type Props = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginButton: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  })
);

function Login(props) {
  const { userState, login } = useUsers();

  const [id, changeId] = useState(userState.userName || '');
  const [pass, changePass] = useState('');

  const classes = useStyles(props);
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>{SiteInfo.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>ログインページ</h1>
        <Input
          placeholder={Strings.LOGIN_ID}
          value={id}
          onChange={(e) => changeId(e.target.value)}
        />
        <Input
          placeholder={Strings.LOGIN_PASSWORD}
          type="password"
          value={pass}
          onChange={(e) => changePass(e.target.value)}
        />
        <Box mt="1rem">
          <Button
            className={classes.loginButton}
            onClick={() => login(id, pass)}
          >
            ログイン
          </Button>
        </Box>
      </div>
    </Layout>
  );
}

Login.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx;

  const pagePayload: IPagePayload = {
    selectedPage: Page.LOGIN,
  };
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  });
  return {};
};

export default Login;
