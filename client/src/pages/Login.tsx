import React, { useState } from 'react';
import { User } from '../types/interface';

const Login = () => {
  const [data, setData] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const username = (
      form.elements.namedItem('username-login') as HTMLInputElement
    ).value;
    const password = (
      form.elements.namedItem('password-login') as HTMLInputElement
    ).value;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message?.err || 'An error occurred during login.');
      }

      console.log('User Info: ', data);
      if (data) {
        console.log('data: ', data);
        setData(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      }
      console.error('An error occurred when logging in a user: ', error);
    }
    form.reset();
  };

  return (
    <div className="pages">
      <h3>User Login Page</h3>
      <br />
      <form onSubmit={handleLogin}>
        <label htmlFor="username-login">
          Username:
          <input
            name="username-login"
            type="text"
            id="username-login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="password-login">
          Password:
          <input
            name="password-login"
            type="password"
            id="password-login"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button className="submit-buttons" type="submit" value="Login User">
          Login User
        </button>
      </form>
      <div>
        <br></br>
        <h2>{data ? <p>Welcome Back, {data.username}!</p> : <p></p>}</h2>
      </div>
    </div>
  );
};

export default Login;
