import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const LoginModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '2rem',
        boxShadow: 24,
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <Typography variant="h6" id="login-modal-title" gutterBottom>
          Login
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
