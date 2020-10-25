import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { IImage } from 'models';
import Link from 'next/link';

type ImageCardProps = {
  image: IImage;
  path: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '320px',
      [theme.breakpoints.up('lg')]: {
        // width: '320px',
      },
    },
    img: {
      width: '30vw',
      height: '30vw',
      [theme.breakpoints.up('lg')]: {
        width: '320px',
        height: '320px',
      },
      objectFit: 'cover',
    },
  })
);

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const classes = useStyles(props);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        // justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Link href={`${props.path}/images/${props.image.id}`}>
          <Button>
            <img
              src={props.image.src}
              alt={props.image.title}
              className={classes.img}
            />
          </Button>
        </Link>
      </Box>

      <Box
        className={classes.root}
        display="flex"
        alignItems="center"
        mb="2rem"
        mt="1rem"
      >
        <Typography variant="h5">{props.image.user}</Typography>
      </Box>
    </Box>
  );
};
