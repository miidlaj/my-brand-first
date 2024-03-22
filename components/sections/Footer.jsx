import React from 'react';
import { social } from '@/components/constants/SocialMedia';
import Link from 'next/link';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div className='flex flex-col gap-2 text-center py-10'>
      <div className='flex justify-center'>
        <img src="/logo.png" alt="logo" className="w-[70px] h-[70px] object-contain opacity-100 z-999" />
      </div>
      <div className='px-4 sm:px-1'>© copyright 2024 by Mybrandfirst Online Services.</div>
      <div className='flex flex-row gap-2 pt-4 text-center items-center justify-center'>
        {social.map((item) => (
          <Link key={item?.id} href={item.href} passHref>
            <Button size='logo' className="border rounded-full bg-slate-900 hover:bg-[#FC8D00]">
              <img key={item.name} src={item.url} alt={item.name} className="w-[18px] h-[22px] object-contain cursor-pointer" />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
