import React from 'react';
import { ErrorProps } from 'next/error';
import { NextPage } from 'next';
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        padding: '0 10%',
      },
    },
    img: {
      maxWidth: '250px',
    },
  })
);

type CustomErrorProps = ErrorProps & {
  message?: string;
};

const ErrorComponent: NextPage<CustomErrorProps> = (props) => {
  const classes = useStyles(props);
  const { statusCode, message } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h5">
        {`${statusCode} ${
          message || 'コンテンツが見つからないか、まだありませんでした＞＜'
        }`}
      </Typography>
      <img className={classes.img} src="/notfound.png" />
    </Box>
  );
};
// ______________________________________________________
//
ErrorComponent.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode,
    title: `Error | ${statusCode}`,
    logData: { screenName: 'Error' },
  };
};
// ______________________________________________________
//
export default ErrorComponent;
