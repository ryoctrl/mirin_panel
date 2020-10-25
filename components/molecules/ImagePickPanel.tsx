import {
  Box,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import * as React from 'react';
import Icon from '@material-ui/icons/Add';
import { useUpload } from '../../hooks/useUpload';
// import { usePosts } from 'hooks';
// import { PostStepPanelProps } from 'models';
// import { Constants } from '../../../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   width: '100%',
      //   height: '0',
      //   paddingTop: '56.92%',
    },
    todoHeader: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      flex: 1,
    },
    todoHeaderTitle: {},
    todoHeaderButtonWrapper: {},
    todoHeaderButton: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    input: {
      display: 'none',
    },
    imagePickerButton: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    addMark: {
      color: '#cccccc',
    },
    label: {
      width: '100%',
      height: '100%',
    },
    grid: {
      width: '100%',
    },
    noPickable: {
      backgroundColor: '#cccccc',
    },
    border: {
      border: '1px solid #cccccc',
    },
    square: {
      width: '12px',
      height: '120px',
    },
  })
);

type ImagePickPanelProps = {
  className?: string;
};

export const ImagePickPanel: React.FC<ImagePickPanelProps> = (props) => {
  const classes = useStyles(props);

  const { uploadState, updateState } = useUpload();

  return (
    <Box className={`${classes.root} ${props.className}`}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        onChange={async (e) => {
          const target = e.target as HTMLInputElement;
          const reader = new FileReader();
          reader.onload = () => {
            updateState({
              ...uploadState,
              image: reader.result as string,
              imageFile: target.files[0],
            });
          };
          reader.readAsDataURL(target.files[0]);
        }}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          focusRipple
          className={`${classes.imagePickerButton} ${classes.border}`}
          component="span"
        >
          {uploadState.image !== '' ? (
            <span
              style={{
                backgroundImage: `url(${uploadState.image})`,
                position: 'absolute',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
              }}
              className={classes.square}
            />
          ) : (
            <Icon className={classes.addMark}></Icon>
          )}
        </Button>
      </label>
    </Box>
  );
};
