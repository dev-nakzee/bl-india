import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, Menu, MenuItem } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ApprovalIcon, GovtNoticeIcon, BrandLiaisonLogo } from '../../utils/frontend/ImageRender';
import UserDashboardButton from './UserDashboardButton';
import FreeQuoteButton from './FreeQuoteButton';
import SearchButton from './SearchButton';

const theme = createTheme();

const NavBar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [navBarFixed, setNavBarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavBarFixed(true);
      } else {
        setNavBarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position={navBarFixed ? "fixed" : "static"} sx={{
      backgroundColor: 'white',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add bottom shadow
      borderBottom: '1px solid #e0e0e0',
      transition: 'top 0.5s ease-in-out',
      top: navBarFixed ? '0' : '-64px', // Adjust this value based on the height of the navbar
      // zIndex: '1100',
      '& .MuiButton-root': {
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none',
        color: 'inherit',
        '&:hover': {
          color: '#808080',
        },
        fontSize: '0.875rem',
        '& .MuiTypography-root': {
          [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
          },
        },
      },
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.25rem 0.5rem',
        minHeight: '40px',
        [theme.breakpoints.up('sm')]: {
          minHeight: '40px',
          margin: '0 10vh',
        },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <BrandLiaisonLogo sx={{minHeight: '40px', width: 'auto'}} />
          </Link>
        </Box>
        {isMobile ? ( // Render dropdown menu only in mobile view
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/free-quote"
            sx={{ mr: 1,
              color: '#197fbd', // Set button color
              '&:hover': {
                color: '#808080', // Change text color on hover
                '& span': {
                  color:'#808080',
                },
                '& .MuiSvgIcon-root': {
                  color: '#808080', // Set icon color
                  marginRight: '0.5rem', // Add spacing between icon and text
                },
              },
              '& .MuiSvgIcon-root': {
                color: '#197fbd', // Set icon color
                marginRight: '0.5rem', // Add spacing between icon and text
              },
              '& span': {
                color:'#197fbd',
              }
            }}
          >
            <span>Free Quote</span>
          </Button>
            <Button variant="text" onClick={handleClick}>
              <WidgetsIcon 
                sx={{
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                sx={{
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
                onClick={handleClose}
              >
                <ApprovalIcon />
                <Typography sx={{paddingLeft: '1rem'}} variant="inherit">Approval Services</Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  color: '#197fbd',
                  '&:hover': {
                    color: '#808080', // Change color on hover
                  },
                }}
                onClick={handleClose}
              >
                <GovtNoticeIcon />
                <Typography sx={{paddingLeft: '1rem'}} variant="inherit">Govt. Notifications</Typography>
              </MenuItem>
              <MenuItem >
                <Button
                  variant="outlined"
                  startIcon={<LockOpenOutlinedIcon />}
                  color="inherit"
                  component={Link}
                  to="/login"
                  sx={{ color: '#197fbd', '&:hover': { color: '#808080' } }}
                >
                  Login
                </Button>
              </MenuItem>
              <MenuItem >
                <Button
                  variant="outlined"
                  startIcon={<AppRegistrationOutlinedIcon />}
                  color="inherit"
                  component={Link}
                  to="/register"
                  sx={{ color: '#197fbd', '&:hover': { color: '#808080' } }}
                >
                  Register
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/approvals" style={{ textDecoration: 'none' }}>
            <Button
                className='roboto-condensed-medium'
                variant="primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left', // Align text to the left
                  lineHeight: '1.25',
                  '& .MuiSvgIcon-root': {
                    marginRight: '0.5rem',
                    height: '20px',
                    width: '20px',
                    '@media (minWidth:600px)': { // Corrected media query syntax
                        height: '34px',
                        width: '34px',
                      },
                  },
                  '& span': {
                     color:'#197fbd',
                  },
                  '& :hover': {
                      color: '#808080', // Change color on hover
                  },
              }}
                >
                <ApprovalIcon sx={{ minHeight: '40px', minWidth: '40px'}}/>
                <span>
                    Compliance Services<br />
                    <i className='roboto-condensed-regular' style={{ fontSize: '10px', '@media (minWidth:600px)': { fontSize: '14px' } }}>(BIS, EPR, TEC, WPC/ETA, BEE & More)</i>
                </span>
                </Button>
            </Link>
            <Link to="/approvals" style={{ textDecoration: 'none'}}>
                <Button
                className='roboto-condensed-medium'
                variant="text"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left', // Align text to the left
                    lineHeight: '1.25',
                    '& .MuiSvgIcon-root': {
                      marginRight: '0.5rem',
                      height: '20px',
                      width: '20px',
                      '@media (minWidth:600px)': { // Corrected media query syntax
                          height: '34px',
                          width: '34px',
                        },
                    },
                    '& span': {
                       color:'#197fbd',
                    },
                    '& :hover': {
                        color: '#808080', // Change color on hover
                    },
                }}
                >
                <GovtNoticeIcon sx={{ minHeight: '40px', minWidth: '40px'}}/>
                <span>
                    Notifications<br />
                    <i className='roboto-condensed-regular' style={{ fontSize: '10px', '@media (minWidth:600px)': { fontSize: '14px' } }}>(Government Notifications)</i>
                </span>
                </Button>
            </Link>
            {navBarFixed ? <SearchButton />: null}
            <FreeQuoteButton />
            <UserDashboardButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
