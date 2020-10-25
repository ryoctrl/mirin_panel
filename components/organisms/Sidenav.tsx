import { List } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Page, SiteInfo } from 'libs';
import { usePage } from 'hooks';
import { NextListItem } from 'components/molecules';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      height: '100vh',
    },
    siteNameContainer: {
      fontSize: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: theme.mixins.toolbar,
    list: {
      padding: 0,
      border: 0,
    },
    listItem: {
      border: 0,
    },
  })
);

type Props = {};

/**
 * Side navigation component
 * @param props Props
 */
export const Sidenavi = function (props: Props) {
  const classes = useStyles(props);
  const { selectedPage, changePage } = usePage();
  const handleChangePage = (page: Page) => () => changePage(page);

  return (
    <div className={classes.root}>
      <div className={`${classes.siteNameContainer} ${classes.toolbar}`}>
        <Link href="/">{SiteInfo.SITE_NAME}</Link>
      </div>

      <List className={classes.list}>
        {Page.values
          .sort((a, b) => a.id - b.id)
          .filter((p) => p.isMenuListed)
          .map((page) => {
            return (
              <NextListItem
                key={page.id}
                className={
                  page.id === selectedPage.id
                    ? classes.listItem
                    : classes.listItem
                }
                isActive={page.id === selectedPage.id}
                href={page.relativeUrl}
                primary={page.pageTitle}
                isChild={page.parentPage !== null}
                hasChild={page.childrenPages.length !== 0}
                onClick={handleChangePage(page)}
              />
            );
          })}
      </List>
    </div>
  );
};
