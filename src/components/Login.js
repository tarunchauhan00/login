// src/Login.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;

    // Send token to backend for verification and storing in BigQuery
    fetch('http://localhost:8080/api/google-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login successful, data saved to BigQuery', data);
      })
      .catch((error) => console.error('Error saving to BigQuery:', error));
  };

  const handleError = () => {
    console.log('Login failed');
  };

  return (
    <GoogleOAuthProvider clientId="959258250983-1kq8k77bg6dnj6u9ebi7tc497s8stocb.apps.googleusercontent.com">
      <div>
        <h1>Login</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
