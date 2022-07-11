import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Container from '../../components/organisms/Container';
import { Footer, AppBar } from './components';

/* eslint-disable */
interface IMain {}

const Main = ({ children }: React.PropsWithChildren<IMain>): JSX.Element => {
  return (
    <Box>
      <Box>
        <AppBar />
      </Box>
      <main>
        {children}
        <Divider />
      </main>
      <Container>
        <Footer
          title="nextjs-mui-fabric"
          description="Instructional Nextjs project with a focus on composition over inheritance"
        />
      </Container>
    </Box>
  );
};

export default Main;
