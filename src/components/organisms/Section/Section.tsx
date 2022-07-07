import React from 'react';
import { Box, styled } from '@mui/material';

interface ISectionProps {
  variant?: 'narrow' | 'fullWidth';
  disablePadding?: boolean;
  className?: string;
  children?: JSX.Element;
  [x: string]: any;
}

const Section = styled(Box, {
  name: 'Section',
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'disablePadding',
})<ISectionProps>(({ theme, variant, disablePadding }) => ({
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(8, 8),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 8),
  },
  ...(variant === 'fullWidth' && {
    maxWidth: '100%',
  }),
  ...(variant === 'narrow' && {
    maxWidth: 800,
  }),
  ...(disablePadding && {
    padding: 0,
  }),
}));

export default Section;
