import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <header>
      <AppBar position="static" sx={{ textAlign: 'center' }}>
        <Toolbar variant="dense" sx={{ background: 'tomato', color: 'green' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pomodoro Timer
          </Typography>
        </Toolbar>
      </AppBar>{' '}
    </header>
  );
};

export default Header;
