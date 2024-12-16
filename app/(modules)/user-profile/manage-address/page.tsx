import AddressCard from '@/app/component/AddressCard';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <AddressCard/>
      <div className='w-full'>
      <Link href={"/user-profile/manage-address/add-address"} className='text-center bg-[#5caf90] w-full text  p-2 text-white'> Add New Address</Link>
      </div>
    </div>
  );
};

export default page;