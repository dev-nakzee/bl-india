import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const RegisterModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="register-modal-title"
      aria-describedby="register-modal-description"
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
        <Typography variant="h6" id="register-modal-title" gutterBottom>
          Register
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
