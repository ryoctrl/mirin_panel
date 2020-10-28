import {
  createStyles,
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
} from '@material-ui/core';
import * as React from 'react';
import { IExhibition, IYears } from 'models';
import { ImageCard } from '../molecules';

type ImageGridProps = {
  years: IYears;
  exhibitions: IExhibition;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {},
    gridTile: {
      height: '320px',
      width: '320px',
    },
  })
);

export const ImageGrid: React.FC<ImageGridProps> = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container spacing={2}>
      {props.exhibitions.images.map((img, idx) => (
        <Grid key={idx} item xs>
          <ImageCard
            image={img}
            path={`/${props.years.years}/${props.exhibitions.title}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};
