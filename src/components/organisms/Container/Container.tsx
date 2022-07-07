import React from 'react';
import { Container as _Container } from '@mui/material';

interface IContainerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const Container = ({
  children,
  ...rest
}: React.PropsWithChildren<IContainerProps>): JSX.Element => (
  <_Container maxWidth="lg" {...rest}>
    {children}
  </_Container>
);

export default Container;
