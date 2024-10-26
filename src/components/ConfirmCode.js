// ConfirmCode.js
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../userpool';

const ConfirmCode = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [confirmationErr, setConfirmationErr] = useState('');

  const handleConfirmation = () => {
    const user = new CognitoUser({
      Username: email,
      Pool: userpool,
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        setConfirmationErr(err.message);
        return;
      }
      alert('Confirmation successful!');
      navigate('/login');
    });
  };

  return (
    <div className="confirm-code">
      <Typography variant="h4">Confirm Your Account</Typography>
      <div className="form">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirmation Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          margin="normal"
          helperText="Enter the code sent to your email"
        />
        <Button variant="contained" onClick={handleConfirmation}>
          Confirm Account
        </Button>
        {confirmationErr && <Typography color="error">{confirmationErr}</Typography>}
      </div>
    </div>
  );
};

export default ConfirmCode;
