import React from 'react';
import ResetPassword from './ResetPassword';

const AccountInformation = () => {
  return (
    <div className='mr-5 '>
      <div className='rounded-xl bg-[#18191D] p-6'>
        <h4 className='text-lg font-medium text-gray-200'>
          Account Information
        </h4>
        <div className='mt-4'>
          <div className='flex gap-x-4'>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  First Name(Optional)
                </h6>
                <input
                  type='text'
                  name=''
                  placeholder='Frist Name'
                  value={'Gabriel'}
                  id=''
                  className='border-none bg-transparent text-xl text-gray-300 outline-none'
                />
              </div>
            </div>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  Last Name(Optional)
                </h6>
                <input
                  type='text'
                  name=''
                  placeholder='Last Name'
                  value={'Erickson'}
                  id=''
                  className='border-none bg-transparent text-xl text-gray-300 outline-none'
                />
              </div>
            </div>
          </div>
          <div className='mt-5 flex gap-x-4'>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  Email (required)
                </h6>
                <input
                  type='email'
                  name=''
                  placeholder='Email address'
                  value={'your@email.com'}
                  id=''
                  className='border-none bg-transparent text-xl text-gray-300 outline-none'
                />
              </div>
            </div>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  Phone number (required)
                </h6>
                <div className='flex '>
                  <div className='flex-1 pr-2'>
                    <input
                      type='text'
                      name=''
                      placeholder='Last Name'
                      value={'+1'}
                      id=''
                      className='w-full border-none bg-transparent text-lg text-gray-300 outline-none'
                    />
                  </div>
                  <div className='flex w-24 items-center gap-x-2 '>
                    <div className='h-9 w-9 rounded-full bg-white'></div>
                    <select
                      id='countries'
                      class='0 block rounded-lg  bg-transparent text-sm  text-white outline-none'
                    >
                      <option value='US' className='bg-gray-800'>
                        US
                      </option>
                      <option value='CA' className='bg-gray-800'>
                        CA
                      </option>
                      <option value='FR' className='bg-gray-800'>
                        FR
                      </option>
                      <option value='DE' className='bg-gray-800'>
                        DE
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 flex gap-x-4'>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  Location
                </h6>
                <div className='flex '>
                  <div className='flex-1 pr-2'>
                    <input
                      type='text'
                      name=''
                      placeholder='location'
                      value={'New York'}
                      id=''
                      className='w-full border-none bg-transparent text-lg text-gray-300 outline-none'
                    />
                  </div>
                  <div className='flex w-24 items-center gap-x-2 '>
                    <div className='h-9 w-9 rounded-full bg-white'></div>
                    <select
                      id='countries'
                      class='0 block rounded-lg  bg-transparent text-sm  text-white outline-none'
                    >
                      <option value='US' className='bg-gray-800'>
                        US
                      </option>
                      <option value='CA' className='bg-gray-800'>
                        CA
                      </option>
                      <option value='FR' className='bg-gray-800'>
                        FR
                      </option>
                      <option value='DE' className='bg-gray-800'>
                        DE
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-6/12'>
              <div className='rounded-lg border border-[#202127] bg-[#202127] px-5 py-3'>
                <h6 className='mb-2 text-sm font-bold tracking-widest text-gray-300'>
                  Currency preferred
                </h6>
                <div className='flex '>
                  <div className='flex-1 pr-2'>
                    <input
                      type='text'
                      name=''
                      placeholder='currency'
                      value={'Binance'}
                      id=''
                      className='w-full border-none bg-transparent text-lg text-gray-300 outline-none'
                    />
                  </div>
                  <div className='flex w-24 items-center gap-x-2 '>
                    <div className='h-9 w-9 rounded-full bg-white'></div>
                    <select
                      id='countries'
                      class='0 block rounded-lg  bg-transparent text-sm  text-white outline-none'
                    >
                      <option value='US' className='bg-gray-800'>
                        BNB
                      </option>
                      <option value='CA' className='bg-gray-800'>
                        CA
                      </option>
                      <option value='FR' className='bg-gray-800'>
                        FR
                      </option>
                      <option value='DE' className='bg-gray-800'>
                        DE
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ResetPassword />
      </div>
    </div>
  );
};

export default AccountInformation;
