import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../components/Blog/Blog/Search';
const Navbar = () => {
  const token = localStorage.getItem('TOKEN');
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className="navbar bg-base-300 justify-between mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <Search />
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            RBO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <Search />
          </ul>
        </div>
        <div>
          <div className="">
            <Link to={'/createBlog'}>
              <p className="bg-gray-300 shadow-xl p-2 rounded-md me-3">
                {' '}
                create blog{' '}
              </p>
            </Link>
          </div>
          <div className="">
            {token ? (
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate('/login');
                }}
                className="bg-cyan-400 shadow-xl p-2 rounded-md"
              >
                LogOut
              </button>
            ) : (
              <Link
                to={'/login'}
                className="bg-gray-300 shadow-xl p-2 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
