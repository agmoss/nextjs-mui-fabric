import React from 'react';
import Box from '@mui/material/Box';
import Main from '../../layouts/main';
import { Typography } from '@mui/material';

const HomeView = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main>
        <Typography>HomeView</Typography>
      </Main>
    </Box>
  );
};

export default HomeView;
