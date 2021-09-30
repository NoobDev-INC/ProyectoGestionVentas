import React from 'react';
import Logo from 'media/LogoDev.png';
import LogoH from 'media/Home.svg';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Link to='/Index'>
        <img className="h-10 w-10" src={LogoH} alt="Home" />
      </Link>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex items-start'>
          <Link to='/'>
            <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
          </Link>
        </div>
        <div >
          <img className='mx-auto h-52 w-auto' src={Logo} alt='Workflow' />
          {children}
        </div>
      </div>
    </div>
      
  );
};

export default AuthLayout;