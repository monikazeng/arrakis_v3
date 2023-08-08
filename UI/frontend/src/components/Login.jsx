import React, { useState } from 'react';
import  {useNavigate} from 'react-router-dom';
//import './globalStyles.css';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login authentication logic here (e.g., API call)

    // For demo purposes, let's assume login is successful
    // Replace the following with your actual authentication logic
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirect to another page after successful login
      navigate('/dashboard');
    } else {
      // Handle login failure (show error message, etc.)
    }
  };

  return (
    <div className="body">
      <header className="page-header"></header>
      <h2>Welcome to Bond User Account</h2>
      <h2>Please login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
