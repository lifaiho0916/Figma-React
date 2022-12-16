import React from 'react';
import {
  FaExchangeAlt,
  FaFacebookMessenger,
  FaHome,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import Item from './Item';
const Sidebar = () => {
  return (
    <div className='mt-4'>
      <div>
        <div>
          <Item icon={<FaHome />} name='Home' active={true} />
          <Item icon={<FaExchangeAlt />} name='Exchange' />
          <Item icon={<FaFacebookMessenger />} name='Trade History' />
          <Item icon={<FaRegQuestionCircle />} name='Help' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
