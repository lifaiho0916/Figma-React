import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <div className='border-b  py-3'>
      <div className='flex items-center'>
        <Logo />
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
