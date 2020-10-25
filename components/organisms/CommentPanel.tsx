import {
  Box,
  Button,
  createStyles,
  Input,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { CommentPostPanel } from './CommentPostPanel';
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

type CommentPanelProps = {};

export const CommentPanel: React.FC<CommentPanelProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Box>
      <Box>
        <Typography>コメント</Typography>
      </Box>
      <CommentPostPanel />

      <Box display="flex" mt="1rem">
        <Box flex="1" display="flex" justifyContent="center">
          <Typography>みりん</Typography>
        </Box>
        <Box flex="5">
          <Typography>コメントや〜</Typography>
        </Box>
      </Box>
    </Box>
  );
};
