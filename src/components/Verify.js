import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../userpool';
import { styled } from '@mui/material/styles';

// Styled components for custom card design
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(4),
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  transition: '0.3s',
  height: '300px', // Ensure all cards have the same height
}));

const VerificationCard = ({ emoji, title, description, onClick, angle }) => (
  <StyledPaper
    elevation={3}
    sx={{
      width: '280px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      transform: `rotate(${angle}deg)`,
      position: 'absolute',
      top: '50%', // Center vertically
      left: angle < 0 ? '10%' : 'auto', // Position based on angle
      right: angle > 0 ? '10%' : 'auto', // Position based on angle
      marginTop: '-150px', // Adjust to align vertically in the center
    }}
  >
    <Avatar sx={{ width: 56, height: 56, margin: '0 auto', backgroundColor: '#2196f3' }}>
      {emoji}
    </Avatar>
    <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
      {description}
    </Typography>
    {onClick && (
      <Button variant="contained" color="primary" onClick={onClick} sx={{ marginTop: 1 }}>
        {title}
      </Button>
    )}
  </StyledPaper>
);

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
    <Container
      component="main"
      maxWidth="false"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(to bottom right, #4facfe, #00f2fe)',
      }}
    >
      {/* Main Verification Card */}
      <StyledPaper elevation={8} sx={{ padding: 4, width: 350, zIndex: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Verify Your Account
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
          We have sent a verification code to <strong>{username}</strong>. Please enter it below:
        </Typography>
        <TextField
          label="Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          margin="normal"
          error={!!error}
          helperText={error && <span style={{ color: 'red' }}>{error}</span>}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleVerification}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Verify Account
        </Button>
      </StyledPaper>

      {/* Additional Cards with Emojis */}
      <VerificationCard
        emoji="💡"
        title="Need Help?"
        description="Contact support for assistance."
        angle={-30} // 30 degrees to the left
      />
      <VerificationCard
        emoji="🚀"
        title="Already a Member?"
        description="Log in to access your account."
        angle={30} // 30 degrees to the right
        onClick={() => navigate('/login')}
      />
    </Container>
  );
};

export default Verify;