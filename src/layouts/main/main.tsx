import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Container from '../../components/Container';
import ButtonAppBar from '../../components/ButtonAppBar';
import { Footer } from './components';

/* eslint-disable */
interface IMain {}

const Main = ({ children }: React.PropsWithChildren<IMain>): JSX.Element => {
  return (
    <Box>
      <Box>
        <ButtonAppBar />
      </Box>
      <main>
        {children}
        <Divider />
      </main>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
