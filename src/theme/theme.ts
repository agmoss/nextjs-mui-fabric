import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { purple, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
      light: purple[400],
    },
    secondary: {
      main: pink[500],
      light: pink[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
