import React, { useState } from 'react';
import './SignUpLogin.css'; // Import CSS for styling if needed
import { useNavigate, useLocation } from 'react-router-dom';

function SignUpLogin({ setUsername, onLogin }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 'signup');
  const [username, setUsernameState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    if (activeTab === 'signup') {
      // Check if any field is empty for signup
      if (!username.trim() || !email.trim() || !password.trim()) {
        alert('Please fill out all fields for signup');
        return;
      }
      // Handle signup form submission
      // Pass the username to the parent component
      setUsername(username);
      // Redirect to home page after signing up
      navigate('/Home');
    } else {
      // Check if any field is empty for login
      if (!username.trim() || !password.trim()) {
        alert('Please enter username and password for login');
        return;
      }
      // Handle login form submission
      // Call the onLogin function if it exists (for login functionality)
      if (onLogin) {
        onLogin();
      }
      // Pass the username to the parent component
      setUsername(username);
      // Redirect to home page after logging in
      navigate('/Home');
    }
  };
  

  return (
    <div className="container">
      <div className="signup-login-container">
        <div className="tabs">
          <button
            className={activeTab === 'signup' ? 'active' : ''}
            onClick={() => handleTabChange('signup')}
          >
            Sign Up
          </button>
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        </div>
        <div className="form-container">
          {activeTab === 'signup' && (
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Sign up form fields */}
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsernameState(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Sign Up</button>
            </form>
          )}
          {activeTab === 'login' && (
            <form className="login-form" onSubmit={handleSubmit}>
              {/* Login form fields */}
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsernameState(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpLogin;
