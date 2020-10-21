import { ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    anchorLink: {
      width: '100%',
      textDecoration: 'none',
    },
    listItemPrimary: {
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
      fontSize: '20px',
    },
    active: {
      color: theme.palette.primary.contrastText,
    },
    inActive: {
      color: '#c6c6c6',
    },
    child: {
      paddingLeft: theme.spacing(4),
    },
  })
);

type Props = {
  /**
   * <Link href="/">
   */
  href: string;
  /**
   * <ListItemText primary="redux"/>
   */
  primary: React.ReactNode;
  /**
   * class
   */
  className?: string;

  /**
   * active menu flag
   */
  isActive: boolean;
  isChild: boolean;
  hasChild: boolean;
  /**
   * onClick event
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

/**
 * Next.js optimized <ListItem>
 * @param props Props
 */
export const NextListItem = function (props: Props) {
  const {
    className,
    href,
    primary,
    isActive,
    isChild,
    hasChild,
    onClick,
  } = props;
  const classes = useStyles(props);

  if (!hasChild) {
    return (
      <Link href={href}>
        <a className={classes.anchorLink} onClick={onClick}>
          <ListItem
            alignItems="center"
            divider={true}
            className={`${className} ${isChild ? classes.child : ''}`}
          >
            <ListItemText
              primary={
                <span
                  className={`${classes.listItemPrimary} ${
                    isActive ? classes.active : classes.inActive
                  }`}
                >
                  {primary}
                </span>
              }
            />
          </ListItem>
        </a>
      </Link>
    );
  }
  return (
    <ListItem
      alignItems="center"
      divider={true}
      className={`${className} ${isChild ? classes.child : ''}`}
    >
      <ListItemText
        primary={
          <span
            className={`${classes.listItemPrimary} ${
              isActive ? classes.active : classes.inActive
            }`}
          >
            {primary}
          </span>
        }
      />
    </ListItem>
  );
};
