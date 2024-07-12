import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdBookmarkAdd } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="bg-[#161616] w-full h-20 text-[#F5C518] flex items-center font-semibold text-xl gap-10 ">
      <img src={logo} className="w-36" alt="" />
      <Link to="/" className="flex items-center gap-1">
        {<RiMovie2Fill />} Movies
      </Link>
      <Link to="watchlist" className="flex items-center gap-1">
        {' '}
        {<MdBookmarkAdd />} My Watchlist
      </Link>
    </nav>
  );
};

export default Navbar;
