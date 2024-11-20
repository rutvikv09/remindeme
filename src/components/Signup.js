import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userpool from '../userpool';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const formInputChange = (formField, value) => {
    if (formField === "email") {
      setEmail(value);
    } else if (formField === "password") {
      setPassword(value);
    }
  };

  const validation = () => {
    return new Promise((resolve, reject) => {
      if (email === '' && password === '') {
        setEmailErr("Email is Required");
        setPasswordErr("Password is required");
        resolve({ email: "Email is Required", password: "Password is required" });
      } else if (email === '') {
        setEmailErr("Email is Required");
        resolve({ email: "Email is Required", password: "" });
      } else if (password === '') {
        setPasswordErr("Password is required");
        resolve({ email: "", password: "Password is required" });
      } else if (password.length < 6) {
        setPasswordErr("Must be 6 characters");
        resolve({ email: "", password: "Must be 6 characters" });
      } else {
        resolve({ email: "", password: "" });
      }
      reject('');
    });
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    setEmailErr("");
    setPasswordErr("");
    validation()
      .then((res) => {
        if (res.email === '' && res.password === '') {
          const attributeList = [];
          attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));
          let username = email;
          localStorage.setItem('username', email);
          userpool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
              console.log(err);
              alert("Couldn't sign up");
            } else {
              console.log(data);
              alert('User Added Successfully');
              navigate('/verify'); // Navigate to confirm page after signup
            }
          });
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="formfield mb-4">
            <TextField
              value={email}
              onChange={(e) => formInputChange("email", e.target.value)}
              label="Email"
              variant="outlined"
              fullWidth
              error={!!emailErr}
              helperText={emailErr}
              required
            />
          </div>
          <div className="formfield mb-4">
            <TextField
              value={password}
              onChange={(e) => formInputChange("password", e.target.value)}
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={!!passwordErr}
              helperText={passwordErr}
              required
            />
          </div>
          <div className="formfield">
            <Button type="submit" variant="contained" onClick={handleClick} className="w-full px-4 py-2 bg-blue-600 text-white rounded shadow">
              Sign Up 📝
            </Button>
          </div>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
