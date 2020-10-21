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
      backgroundColor: theme.palette.common.black,
      height: '100vh',
    },
    siteNameContainer: {
      fontSize: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.black,

      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      // boxShadow: theme.shadows[4],
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: theme.mixins.toolbar,
    list: {
      padding: 0,
      border: 0,
    },
    listItem: {
      border: 0,
      // boxShadow: theme.shadows[3],
    },
    deactive: {
      // transition: 'background-color 1.2s', // mouse out
      // '&:hover': {
      //   backgroundColor: theme.palette.primary.light,
      //   transition: 'background-color 0.4s', // mouse over
      // },
      // color: '#111111',
    },
    active: {
      // backgroundColor: theme.palette.primary.light,
      // display: 'none',
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
                    ? `${classes.listItem} ${classes.active}`
                    : `${classes.listItem} ${classes.deactive}`
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
