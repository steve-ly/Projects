import React from 'react';
import { Link } from 'react-router-dom'; 
import { navLinks } from '../consts/navLinks'; 

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center bg-black bg-opacity-15">
      <img src="src/assets/navIcon.png" className="w-[80px] h-[100px] ml-5" alt="Navigation Icon" />
      <ul className="list-none flex justify-start items-center flex-1 ml-20">
        {navLinks.map((nav) => (
          <li key={nav.id} className="font-poppins font-normal cursor-pointer text-[28px] text-white mr-20 hover:scale-110 transition-transform duration-300">
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
