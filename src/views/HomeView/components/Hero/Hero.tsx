import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
interface IHeroProps {
  variant?: 'primary' | 'secondary';
}

const Hero = styled(Box, {
  name: 'Hero',
  shouldForwardProp: (prop) => prop !== 'variant',
})<IHeroProps>(({ theme, variant }) => ({
  height: 300,
  backgroundColor: variant ? theme.palette[variant].light : undefined,
  '&:hover': {
    backgroundColor: variant ? theme.palette[variant].main : undefined,
    opacity: [0.9, 0.8, 0.7],
  },
}));

export default Hero;
