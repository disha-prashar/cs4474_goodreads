import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Retrieve user details from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    // Check if the entered credentials match
    if (username === storedUsername && password === storedPassword) {
      // Redirect or show success message
      alert('Login successful');
    } else {
      // Show error message
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
