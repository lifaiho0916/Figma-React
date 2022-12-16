import React from 'react';
import {
  FaExchangeAlt,
  FaFacebookMessenger,
  FaHome,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import Item from './Item';
import TraderMenu from './TraderMenu';

const Sidebar = () => {
  return (
    <div className='mt-10'>
      <div>
        <div className='mb-10'>
          <Item icon={<FaHome />} name='Home' active={true} />
          <Item icon={<FaExchangeAlt />} name='Exchange' />
          <Item icon={<FaFacebookMessenger />} name='Trade History' />
          <Item icon={<FaRegQuestionCircle />} name='Help' />
        </div>
        <hr className='border border-gray-700' />
        <TraderMenu />
      </div>
    </div>
  );
};

export default Sidebar;
