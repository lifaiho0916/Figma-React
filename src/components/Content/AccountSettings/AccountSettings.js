import React from 'react';
import AccountInformation from './AccountInformation';
import FA from './FA';
import Verified from './Verified';

const AccountSettings = () => {
  return (
    <div className=''>
      <div className=' mt-12'>
        <div className='flex gap-x-5 overflow-hidden'>
          <div className='w-7/12'>
            <AccountInformation />
            <FA />
          </div>
          <div className='w-5/12'>
            <Verified />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
