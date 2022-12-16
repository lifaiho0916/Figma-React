import React from 'react';
import { FaStar } from 'react-icons/fa';
const ResetPassword = () => {
  return (
    <div className='mt-14'>
      <div>
        <h4 className='text-lg font-medium text-gray-200'>Security</h4>
        <div className='mt-3 flex items-center gap-x-4'>
          <div className='flex items-start gap-x-3'>
            <div className='mt-2 flex items-center gap-x-1 text-xs text-white'>
              <p>|</p>
              <FaStar />
              <FaStar />
            </div>
            <div>
              <h4 className='text-lg font-medium text-gray-200'>Password</h4>
              <p className='text-sm text-gray-600'>
                Login password is used to log in to your account.
              </p>
            </div>
          </div>

          <div className='w-48'>
            <button className='w-full cursor-pointer rounded-lg bg-primary-1 px-6 py-3 text-sm text-[#131517]'>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
