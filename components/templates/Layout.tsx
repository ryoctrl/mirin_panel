import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';
import { usePage } from 'hooks';
import { ResponsiveDrawer } from 'components/organisms';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
  })
);

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<Props> = (props: Props) => {
  const { children, className } = props;
  const classes = useStyles(props);
  const { selectedPage } = usePage();
  return (
    <section className={`${classes.root} ${className}`}>
      <Head>
        <title>Page</title>
      </Head>
      <ResponsiveDrawer>
        <article>{children}</article>
      </ResponsiveDrawer>
    </section>
  );
};
