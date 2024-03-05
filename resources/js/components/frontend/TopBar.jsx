import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Translate';
import { AzadiLogo } from '../../utils/frontend/ImageRender';
import { useTheme } from '@mui/material/styles';

const TopBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for controlling drawer open/close

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{
        backgroundColor: 'white',
        borderBottom: '0.01em solid #e0e0e0',
        boxShadow: 'none',
        minHeight: '32px',
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 0.5rem',
          minHeight: '32px',
          [theme.breakpoints.up('sm')]: {
            margin: '0 10vh',
            minHeight: '32px',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <AzadiLogo
              sx={{
                minHeight: '20px', 
                width: 'auto'
              }}
            />
          </Link>
        </Box>
        {isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              id="basic-button"
              aria-controls={anchorEl ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? 'true' : undefined}
              onClick={toggleDrawer(true)} // Open drawer on icon click
              color="inherit"
              sx={{
                color: '#197fbd',
                '&:hover': {
                  color: '#808080', // Change color on hover
                },
              }}
            >
              <MenuIcon/>
            </IconButton>
            {/* Language selector for mobile view */}
            <IconButton
                id="language-button-mobile"
                aria-label="language-button"
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleLanguageClick}
                color="inherit"
                sx={{ 
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
            >
                <LanguageIcon />
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={languageAnchorEl}
              keepMounted
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>English</MenuItem>
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>Español</MenuItem>
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>Français</MenuItem>
            </Menu>
            {/* Drawer for mobile menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List
                sx={{
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
              >
                <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/blogs" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Blogs" />
                </ListItem>
                <ListItem button component={Link} to="/downloads" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Downloads" />
                </ListItem>
                <ListItem button component={Link} to="/careers" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Careers" />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="inherit"
                className='roboto-condensed-medium'
                sx={{
                  textTransform: 'capitalize',
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080',
                  },
                  fontSize: '0.875rem',
                }}
              >
                About
              </Button>
            </Link>
            <Link to="/blogs" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="inherit"
                className='roboto-condensed-medium'
                sx={{
                  textTransform: 'capitalize',
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080',
                  },
                  fontSize: '0.875rem',
                }}
              >
                Blogs
              </Button>
            </Link>
            <Link to="/downloads" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="inherit"
                className='roboto-condensed-medium'
                sx={{
                  textTransform: 'capitalize',
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080',
                  },
                  fontSize: '0.875rem',
                }}
              >
                Downloads
              </Button>
            </Link>
            <Link to="/careers" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="inherit"
                className='roboto-condensed-medium'
                sx={{
                  textTransform: 'capitalize',
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080',
                  },
                  fontSize: '0.875rem',
                }}
              >
                Careers
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                color="inherit"
                className='roboto-condensed-medium'
                sx={{
                  textTransform: 'capitalize',
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080',
                  },
                  fontSize: '0.875rem',
                }}
              >
                Contact
              </Button>
            </Link>
            {/* Add similar buttons for other desktop menu items */}
            <IconButton
                id="language-button-desktop"
                aria-label="language-button"
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleLanguageClick}
                color="inherit"
                sx={{
                  color: '#197fbd',
                  fontSize: '0.5rem',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
                >
                <LanguageIcon sx={{ fontSize: '0.875rem'}}/>
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={languageAnchorEl}
              keepMounted
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>English</MenuItem>
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>Español</MenuItem>
                  <MenuItem className='roboto-condensed-regular' sx={{color: '#197fbd'}} onClick={handleLanguageClose}>Français</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
