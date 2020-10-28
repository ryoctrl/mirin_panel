import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { IImage } from 'models';
import { useRouter } from 'next/router';

type ImageCardProps = {
  image: IImage;
  path: string;
};

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const router = useRouter();

  const onClickCard = () => {
    router.push(`${props.path}/images/${props.image.id}`);
  };

  return (
    <Card variant="outlined">
      <CardActionArea onClick={onClickCard}>
        <CardMedia
          component="img"
          image={props.image.src}
          title={props.image.title}
        />
        <CardContent>
          <Typography variant="h5">{props.image.user}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
