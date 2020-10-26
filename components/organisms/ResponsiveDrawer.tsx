import { Box, Drawer, IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Sidenavi } from 'components/organisms';

const drawerWidth = 340;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      position: 'absolute',
      height: '22%',
      backgroundColor: 'white',
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      width: drawerWidth,
      borderRightColor: theme.palette.primary.dark,
      background: 'transparent',
    },
    content: {
      flexGrow: 1,
    },
    menuIcon: {
      position: 'absolute',
      right: 0,
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

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.menuIcon} display="flex" alignItems="center">
        <IconButton
          color="inherit"
          aria-label="メニューを開く"
          onClick={handleDrawer}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      <main className={classes.content}>{children}</main>
      <Drawer
        variant="temporary"
        anchor={'right'}
        open={isDrawerOpen}
        onClose={handleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Sidenavi />
      </Drawer>
    </div>
  );
};
