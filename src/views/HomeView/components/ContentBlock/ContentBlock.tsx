import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
interface IContentBlockProps {
  variant?: 'primary' | 'secondary';
}

/**
 * @description Simple component to represent content
 */
const ContentBlock = styled(Box, {
  name: 'Hero',
  shouldForwardProp: (prop) => prop !== 'variant',
})<IContentBlockProps>(({ theme, variant }) => ({
  height: 300,
  backgroundColor: variant ? theme.palette[variant].main : undefined,
  '&:hover': {
    backgroundColor: variant ? theme.palette[variant].light : undefined,
    opacity: [0.9, 0.8, 0.7],
  },
}));

export default ContentBlock;
