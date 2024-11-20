import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Card, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../services/authenticate';
import { styled } from '@mui/material/styles';

// Styled Card for the login form
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(25),
  padding: theme.spacing(3),
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  background: '#fff',
}));

const EmojiAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: 'auto',
  backgroundColor: theme.palette.primary.main,
}));

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [loginErr, setLoginErr] = useState('');

  const formInputChange = (formField, value) => {
    if (formField === 'email') {
      setEmail(value);
    }
    if (formField === 'password') {
      setPassword(value);
    }
  };

  const validation = () => {
    return new Promise((resolve) => {
      setEmailErr('');
      setPasswordErr('');
      if (email === '' && password === '') {
        setEmailErr('Email is required');
        setPasswordErr('Password is required');
        resolve({ email: 'Email is required', password: 'Password is required' });
      } else if (email === '') {
        setEmailErr('Email is required');
        resolve({ email: 'Email is required', password: '' });
      } else if (password === '') {
        setPasswordErr('Password is required');
        resolve({ email: '', password: 'Password is required' });
      } else if (password.length < 6) {
        setPasswordErr('Must be at least 6 characters');
        resolve({ email: '', password: 'Must be at least 6 characters' });
      } else {
        resolve({ email: '', password: '' });
      }
    });
  };

  const handleClick = () => {
    validation()
      .then((res) => {
        if (res.email === '' && res.password === '') {
          authenticate(email, password)
            .then(() => {
              setLoginErr('');
              navigate('/dashboard');
            })
            .catch((err) => {
              console.log(err);
              setLoginErr(err.message);
            });
        }
      })
      .catch((err) => console.log(err));
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
        backgroundImage: 'url("https://images.unsplash.com/photo-1544654571-745f5efc572e")', // Sample cloud image URL
        backgroundSize: 'cover', // Ensure it covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repetition
        backgroundColor:'	#0080ff'
      }}
    >
      <StyledCard>
        <EmojiAvatar>
          <Typography variant="h5" sx={{ color: 'white' }}>🔑</Typography>
        </EmojiAvatar>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          value={email}
          onChange={(e) => formInputChange('email', e.target.value)}
          label="Email"
          fullWidth
          error={!!emailErr}
          helperText={emailErr}
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={password}
          onChange={(e) => formInputChange('password', e.target.value)}
          type="password"
          label="Password"
          fullWidth
          error={!!passwordErr}
          helperText={passwordErr}
          variant="outlined"
          margin="normal"
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
          fullWidth
        >
          Login
        </Button>
        {loginErr && (
          <Typography variant="body2" color="error" align="center" marginTop={2}>
            {loginErr}
          </Typography>
        )}
      </StyledCard>
    </Container>
  );
};

export default Login;


