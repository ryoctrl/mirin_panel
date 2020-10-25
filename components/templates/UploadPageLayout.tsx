import * as React from 'react';
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
import { CommentPanel, ImageGrid, PanelsHeader } from 'components/organisms';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { TestImages } from '../../models';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { ImagePickPanel } from '../molecules/ImagePickPanel';
import { useUpload } from '../../hooks/useUpload';
import { IUploadState } from '../../stores/upload';

type UploadPageLayoutProps = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      maxWidth: '400px',
    },
    pickerRoot: {
      width: '100%',
      // maxWidth: '320px',
      position: 'relative',
    },
    spacer: {
      width: '100%',
      paddingBottom: '100%',
    },
    picker: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      // maxWidth: '320px',
      // maxHeight: '320px',
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

export const UploadPageLayout: React.FC<UploadPageLayoutProps> = (props) => {
  const classes = useStyles(props);

  const { upload, uploadState, updateState } = useUpload();

  const changeState = (key: keyof IUploadState, value: any) =>
    updateState({ ...uploadState, [key]: value });

  return (
    <Box
      mt="2rem"
      flex="1"
      flexGrow="1"
      display="flex"
      flexDirection="column"
      // alignItems="center"
      justifyContent="flex-start"
      className={classes.root}
    >
      <Box display="flex" className={classes.textContent}>
        <Typography>画像ファイル</Typography>
      </Box>

      <Box className={classes.pickerRoot} mt="1rem">
        <div className={classes.spacer} />
        <ImagePickPanel className={classes.picker} />
      </Box>
      <Box mt="1rem">
        <Typography>H.N</Typography>
        <TextField
          variant="outlined"
          value={uploadState.name}
          onChange={(e) => changeState('name', e.target.value)}
          className={classes.input}
        />
      </Box>

      <Box mt="1rem">
        <Typography>タイトル</Typography>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={uploadState.title}
          onChange={(e) => changeState('title', e.target.value)}
          className={classes.input}
        />
      </Box>

      <Box mt="1rem">
        <Typography>キャプション</Typography>
        <TextField
          multiline
          rows={4}
          value={uploadState.caption}
          onChange={(e) => changeState('caption', e.target.value)}
          className={classes.input}
          variant="outlined"
        />
      </Box>
      <Box mt="1rem">
        <Button
          variant="contained"
          color="default"
          className={classes.input}
          startIcon={<CloudUploadIcon />}
          onClick={upload}
        >
          アップロード
        </Button>
      </Box>
    </Box>
  );
};
