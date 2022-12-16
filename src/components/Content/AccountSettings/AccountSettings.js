import React from 'react';
import AccountInformation from './AccountInformation';
import FA from './FA';

const AccountSettings = () => {
  return (
    <div>
      <div className=' mt-12'>
        <div className='flex '>
          <div className='w-8/12'>
            <AccountInformation />
            <FA />
          </div>
          <div className='w-4/12'></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
