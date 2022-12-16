import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <div className='border-b border-gray-600  '>
      <div className='flex items-center'>
        <Logo />
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
