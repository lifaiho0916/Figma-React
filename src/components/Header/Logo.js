import React from 'react';
import { FaGripLines } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.png';

function Logo() {
  return (
    <div className='flex w-72 items-center justify-between px-3'>
      <div className='h-16 w-24'>
        <img src={logoImg} className='h-full w-full object-contain' alt='' />
      </div>
      <p className='text-2xl text-white'>
        <FaGripLines />
      </p>
    </div>
  );
}

export default Logo;
