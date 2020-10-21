import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { usePage, useUsers } from 'hooks';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Sidenavi } from 'components/organisms';

const drawerWidth = 340;
const headerHeight = 64;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'absolute',
      marginLeft: drawerWidth,
      // height: `${headerHeight}px`,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
      // height: `${headerHeight}px`,
    },
    drawerPaper: {
      width: drawerWidth,
      borderRightColor: theme.palette.primary.dark, // sidenavi border right
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    content: {
      flexGrow: 1,
    },
    title: {
      fontSize: 25,
    },
  })
);

type Props = {
  children: React.ReactNode;
};

/**
 * Responsive drawer
 * @see https://material-ui.com/demos/drawers/#responsive-drawer
 */
export const ResponsiveDrawer = function (props: Props) {
  const { children } = props;
  const classes = useStyles(props);
  const { selectedPage } = usePage();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { userState } = useUsers();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" flex="1">
            <Box display="flex" flexGrow="1">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography
                  variant="h2"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  {selectedPage.pageTitle}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box display="flex" alignItems="center">
                <Avatar src={userState.iconUrl || ''} />
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pl="8px"
              >
                <Typography>{userState.name}</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
