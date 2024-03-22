import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesDetails } from "@/lib/serviceDetails";
import ServiceItems from "./ServiceItems";
import { Separator } from '../ui/separator';
import Link from 'next/link';

const BlogCard = ({ service, title }) => {
  return (
    <div>
      <Card className="w-full bg-transparent border-none ">
        <CardHeader className='pt-10 mt-3 lg:mt-7'>
          <CardTitle className="flex flex-row items-center w-full lg:gap-3 gap-4">
            <div className='flex-[.7] lg:flex-[.3] '>
            <Separator className="text-slate-500 w-full"/>
            </div>
            <div className='flex justify-center items-center flex-[.2] lg:flex-[.8]'>
            <h2 className="font-playfair_display leading-[24px] text-[#ffffff] text-[16px]  font-normal tracking-[2px] uppercase text-center">services</h2>
            </div>
            <Separator className="text-slate-500 flex-[.7] lg:flex-[.3]"/>
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          {servicesDetails.map((item) => (
            // <ServiceItems key={item.id} name={item} title={service.title} />
           <Link key={item.id} href={`/services/${item.id}`}>
          <div className='text-[15px] font-open_sans text-[#C4C4C4] leading-[44px]'>   
              {item.title} 
          </div>
          <div className='pt-[1.2px]'>
          <Separator className="text-slate-500 "/>
          </div>
          </Link>  
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
