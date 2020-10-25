import classes from '*.module.css';
import {
  Box,
  Typography,
  TextField,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    img: {
      maxWidth: '60%',
      height: 'auto',
    },
    textContent: {
      width: '100%',
      // maxWidth: '60%',
    },
    input: {
      width: '100%',
      borderRadius: '1px solid #C4C4C4',
    },
  })
);
type CommentPostPanelProps = {};

export const CommentPostPanel: React.FC<CommentPostPanelProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Box display="flex" mt="1rem">
      <Box flex={1}>
        <Typography>H.N</Typography>
        <TextField variant="outlined" className={classes.input} />
      </Box>
      <Box flex="6">
        <Typography>コメント</Typography>
        <TextField
          multiline
          rows={4}
          className={classes.input}
          variant="outlined"
        />
      </Box>
      <Box flex="1">
        <Button>
          <Typography>送信</Typography>
        </Button>
      </Box>
    </Box>
  );
};
