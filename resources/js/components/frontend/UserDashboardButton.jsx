import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const UserDashboardButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    handleClose();
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        id="user-dashboard-button"
        startIcon={<AccountCircleOutlinedIcon />}
        className='roboto-condensed-medium'
        aria-controls={anchorEl ? 'user-dashboard-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleClick}
        sx={{
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
        <span>Account</span>
      </Button>
      <Menu
        className='Roboto-condensed-regular'
        id="user-dashboard-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-dashboard-button',
        }}
      >
        <MenuItem
          sx={{
            color: '#197fbd',
            '&:hover': {
              color: '#808080', // Change color on hover
            },
          }}
          onClick={handleLoginClick}
        >
          <LockOpenOutlinedIcon sx={{'marginRight':'1rem'}}/>
          <ListItemText primary="Login" />
        </MenuItem>
        <MenuItem
          sx={{
            color: '#197fbd',
            '&:hover': {
              color: '#808080', // Change color on hover
            },
          }}
          onClick={handleRegisterClick}
        >
          <AppRegistrationOutlinedIcon sx={{'marginRight':'1rem'}}/>
          <ListItemText primary="Register" />
        </MenuItem>
      </Menu>
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal open={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </>
  );
};

export default UserDashboardButton;
