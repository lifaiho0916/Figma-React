import React from 'react';
import { FaRegBell, FaRegCommentAlt } from 'react-icons/fa';
import Icon from './Icon';
import Profile from './Profile';
function NavMenu() {
  return (
    <div className='flex-1  py-3 pr-5'>
      <div className='flex justify-end gap-x-4'>
        <Icon name={'Notification'} value={2} icon={<FaRegCommentAlt />} />
        <Icon name={'Notification'} value={2} icon={<FaRegBell />} />

        <div className='rounded-3xl border px-3 py-3 text-white'>
          <p>0xSFw...ASws</p>
        </div>
        <Profile />
      </div>
    </div>
  );
}

export default NavMenu;
