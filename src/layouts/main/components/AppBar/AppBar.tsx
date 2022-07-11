import React from 'react';
import { AppBar as _AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <_AppBar position="static">
        <Toolbar>
          <IconButton
            color={'primary'}
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={'primary'}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            nextjs-mui-fabric
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </_AppBar>
    </Box>
  );
};

export default AppBar;
