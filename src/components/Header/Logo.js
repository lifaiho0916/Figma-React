import React from 'react';
import { FaGripLines } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.png';

function Logo() {
  return (
    <div className='flex w-3/12 items-center justify-between border-[#23262F] px-7 xl:border-r'>
      <div className='hidden h-24 w-24 lg:block'>
        <img src={logoImg} className='h-full w-full object-contain' alt='' />
      </div>
      <p className=' text-2xl text-white'>
        <FaGripLines />
      </p>
    </div>
  );
}

export default Logo;
