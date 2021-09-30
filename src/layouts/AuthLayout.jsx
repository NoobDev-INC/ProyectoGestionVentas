import React from 'react';
import LogoDev from 'components/LogoDev';
import LogoHome from 'components/LogoHome';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Link to='/Index'>
        <LogoHome/>
      </Link>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex items-start'>
          <Link to='/'>
            <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
          </Link>
        </div>
        <div >
          <LogoDev/>
          {children}
        </div>
      </div>
    </div>  
  );
};

export default AuthLayout;