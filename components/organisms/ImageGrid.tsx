import { Grid } from '@material-ui/core';
import * as React from 'react';
import { IExhibition, IYears } from 'models';
import { ImageCard } from '../molecules';

type ImageGridProps = {
  years: IYears;
  exhibitions: IExhibition;
};

export const ImageGrid: React.FC<ImageGridProps> = (props) => {
  return (
    <Grid container spacing={3}>
      {props.exhibitions.images.map((img, idx) => (
        <Grid key={idx} item xs={12} sm={6} lg={3}>
          <ImageCard
            image={img}
            path={`/${props.years.years}/${props.exhibitions.title}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};
