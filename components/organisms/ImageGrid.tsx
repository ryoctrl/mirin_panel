import classes from '*.module.css';
import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  Typography,
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
    <GridList cellHeight="auto" className={classes.gridList} cols={3}>
      {props.exhibitions.images.map((img, idx) => (
        <GridListTile className={classes.gridTile} key={img.src + idx}>
          <ImageCard
            image={img}
            path={`/${props.years.years}/${props.exhibitions.title}`}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};
