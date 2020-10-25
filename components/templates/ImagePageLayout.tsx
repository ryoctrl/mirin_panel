import * as React from 'react';
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { CommentPanel, ImageGrid, PanelsHeader } from 'components/organisms';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { TestImages } from 'models';
import ErrorComponent from '../../pages/_error';
import { useExhibitions } from '../../hooks/useExhibitions';
import { getExhibition } from '../../stores/exhibitions';

type ImagePageLayoutProps = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    img: {
      // maxWidth: '60%',
      height: 'auto',
    },
    textContent: {
      width: '100%',
      maxWidth: '60%',
    },
  })
);

const ImagePageLayout: React.FC<ImagePageLayoutProps> = (props) => {
  const classes = useStyles(props);
  const router = useRouter();

  const { exhibitionState } = useExhibitions();

  const { id, years, season } = router.query;

  const exhibition = getExhibition(
    exhibitionState,
    years as string,
    season as string
  );

  if (!exhibition) {
    return <ErrorComponent statusCode={404} />;
  }

  const images = exhibition.images.filter((img) => img.id === Number(id));
  if (images.length === 0) {
    return <ErrorComponent statusCode={404} />;
  }

  const image = images[0];

  return (
    <Box
      className={classes.root}
      mt="2rem"
      display="flex"
      flex="1"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={image.src} className={classes.img} />
      </Box>
      <Box
        className={classes.textContent}
        display="flex"
        justifyContent="space-between"
        mt="2rem"
      >
        <Box flex="1">
          <Typography variant="h4">{image.title}</Typography>
        </Box>
        <Box flex="1" display="flex" justifyContent="flex-end">
          <Typography variant="h4">{image.user}</Typography>
        </Box>
      </Box>
      <Box className={classes.textContent} mt="1rem">
        <Typography variant="subtitle1">
          {image.caption || 'キャプションはありません'}
        </Typography>
      </Box>
      <Box className={classes.textContent} mt="2rem">
        <CommentPanel />
      </Box>
    </Box>
  );
};

export default ImagePageLayout;
