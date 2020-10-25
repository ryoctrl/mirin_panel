import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { SiteInfo } from 'libs';
import { useExhibitions } from '../../hooks/useExhibitions';
import { IYears } from '../../models';

type PanelsHeaderProps = {
  className?: string;
  years: IYears;
};

export const PanelsHeader: React.FC<PanelsHeaderProps> = (props) => {
  return (
    <Box display="flex" className={props.className || ''} p="1rem 0">
      <Box>
        <Typography variant="h3">
          {SiteInfo.SITE_NAME} {props.years.years}
        </Typography>
      </Box>

      <Box display="flex" ml="2rem" alignItems="flex-end">
        {props.years.exhibitions.map((exb) => (
          <Button key={`${props.years.years}-${exb.title}`}>
            <Typography variant="h5">{exb.title}</Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};
