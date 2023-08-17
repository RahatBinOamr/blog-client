import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handelRegister = event => {
    event.preventDefault();
    axios
      .post('https://blog-server-inky.vercel.app/api/v1/user/register', {
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.code === 200) {
          alert('Register success.');
          navigate('/login');
        } else {
          alert('Error.');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
          onSubmit={handelRegister}
        >
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
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
            if you have an account please{' '}
            <Link className="text-cyan-500" to={'/login'}>
              Login
            </Link>{' '}
          </h1>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
