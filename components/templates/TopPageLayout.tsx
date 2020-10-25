import * as React from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { ImageGrid, PanelsHeader } from 'components/organisms';
import { useExhibitions } from '../../hooks/useExhibitions';
import ErrorComponent from '../../pages/_error';

type TopPageLayoutProps = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        padding: '0 10%',
      },
    },
    header: {
      width: '100%',
      height: '22%',
    },
  })
);

const TopPageLayout: React.FC<TopPageLayoutProps> = (props) => {
  const classes = useStyles(props);

  const { exhibitionState } = useExhibitions();

  if (exhibitionState.years.length === 0) {
    return <ErrorComponent statusCode={404} />;
  }

  const year = exhibitionState.years[0];
  const exhibitions = year.exhibitions[0];

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <PanelsHeader years={year} className={classes.header} />
      {exhibitions.images.length === 0 ? (
        <ErrorComponent
          statusCode={404}
          message={`${year.years}年度の${exhibitions.title}にはまだ１枚も投稿されていません＞＜ `}
        />
      ) : (
        <ImageGrid years={year} exhibitions={exhibitions} />
      )}
    </Box>
  );
};

export default TopPageLayout;
