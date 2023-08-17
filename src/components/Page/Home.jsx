import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Blogs from '../Blog/Blog/Blogs';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default Home;
