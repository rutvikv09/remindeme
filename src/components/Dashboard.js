// Dashboard.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Get the username from local storage

  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear the username from local storage on logout
    // Add any other logout logic, like calling Cognito sign-out if needed
    navigate('/'); // Redirect to the login or home page
  };

  return (
    <div className="dashboard">
      <Typography variant="h4">Welcome, {username}!</Typography>
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
