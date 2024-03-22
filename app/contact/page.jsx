import Banner from '@/components/sections/Banner';
import React from 'react';
import ContactList from '@/components/sections/ContactList';
import GoogleMap from '@/components/sections/GoogleMap';
import ContactDetails from '@/components/sections/ContactDetails';
import { Separator } from '@/components/ui/separator';

const Page = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <Banner title='Contact us' page='contact'/>
      <div className='py-20'>
        <ContactDetails/>
      </div>   
      <ContactList />
      <div className='mt-12 py-10'>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Page;
