import React, { useState } from 'react';
import { Button} from '@mui/material';
import RequestQuoteModal from './RequestQuoteModal';

const FreeQuoteButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        // startIcon={<RequestQuoteOutlinedIcon />}
        onClick={handleOpen}
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
      <RequestQuoteModal open={open} onClose={handleClose} />
    </>
  );
};

export default FreeQuoteButton;
