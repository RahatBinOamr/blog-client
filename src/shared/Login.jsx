import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handelLogin = event => {
    event.preventDefault();
    const user = { email, password };

    fetch(`https://blog-server-inky.vercel.app/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data === 'success') {
          navigate('/');
          toast.success('logged in successfully');
        }
        console.log('hello', data);
      })
      .catch(err => console.error(err));
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
          onSubmit={handelLogin}
        >
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <h1 className="mb-2">
            if you have no account please{' '}
            <Link className="text-cyan-500" to={'/register'}>
              register
            </Link>{' '}
          </h1>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
