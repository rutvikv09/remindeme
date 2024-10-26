import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../userpool';

const Verify = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleVerification = () => {
    setError('');
    const user = new CognitoUser({
      Username: username,
      Pool: userpool,
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.error('Verification error:', err);
        setError(err.message || 'Failed to verify the account');
      } else {
        console.log('Verification result:', result);
        alert('Account verified successfully');
        navigate('/dashboard');
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Verify Your Account
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          We have sent a verification code to <strong>{username}</strong>. Please enter it below:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error && <span style={{ color: 'red' }}>{error}</span>}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleVerification}
              fullWidth
            >
              Verify Account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Verify;




// // src/components/Verify.js
// import React, { useState } from 'react';
// import { Button, TextField, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { CognitoUser } from 'amazon-cognito-identity-js';
// import userpool from '../userpool';

// const Verify = () => {

//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const Navigate = useNavigate();
//   const username = localStorage.getItem('username');

//   const handleVerification = () => {
//     setError('');
//     const user = new CognitoUser({
//       Username: username,
//       Pool: userpool,
//     });

//     user.confirmRegistration(code, true, (err, result) => {
//       if (err) {
//         console.error('Verification error:', err);
//         setError(err.message || 'Failed to verify the account');
//       } else {
//         console.log('Verification result:', result);
//         alert('Account verified successfully');
//         Navigate('/dashboard');
//       }
//     });
//   };

//   return (
//     <div className="verify">
//       <div className="form">
//         <Typography variant="h5">Verify Account</Typography>
//          <label for="Email">email</label>
//         <input  fullWidth margin="normal" type='text' id='Email' name='email' value={username} readOnly />
//         <TextField
//           label="Verification Code"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" onClick={handleVerification}>
//           Verify Account
//         </Button>
//         {error && <Typography color="error" variant="body2">{error}</Typography>}
//       </div>
//     </div>
//   );
// };

// export default Verify;
