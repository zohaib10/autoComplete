import React from 'react';

import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const Navbar = () => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            guidebook challenge
          </Typography>
          <Link to="/results" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">
              View Results
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
