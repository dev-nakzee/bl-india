import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const RequestQuoteModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="request-quote-modal-title"
      aria-describedby="request-quote-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="request-quote-modal-title" variant="h6" component="h2">
          Request a Free Quote
        </Typography>
        <Typography id="request-quote-modal-description" sx={{ mt: 2 }}>
          Please fill out the form below to request a free quote:
        </Typography>
        {/* Your form components can go here */}
        <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default RequestQuoteModal;
