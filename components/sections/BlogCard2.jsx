import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from '../ui/separator';
import { Category } from '../constants/Category';
import Link from 'next/link';

const BlogCard2 = ({ service, title }) => {
  return (
    <div className='-mt-12 lg:pt-8 '>
      <Card className="w-full bg-transparent border-none  ">
        <CardHeader className='pt-12'>
          <CardTitle className="flex flex-row items-center w-full lg:gap-3 gap-4">
            <div className='flex-[.7] lg:flex-[.3]'>
            <Separator className="text-slate-500 w-full"/>
            </div>
            <div className='flex justify-center items-center flex-[.2] lg:flex-[.8]'>
            <h2 className="font-playfair_display leading-[24px] text-[#ffffff] text-[16px]  font-normal tracking-[2px] uppercase text-center">Category</h2>
            </div>
            <Separator className="text-slate-500 flex-[.7] lg:flex-[.3]"/>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {Category.map((item) => (
            // <ServiceItems key={item.id} name={item} title={service.title} />
            <Link key={item.id} href='/blog/254'>
          <div className='text-[15px] font-open_sans text-[#C4C4C4] capitalize leading-[44px]'>   
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

export default BlogCard2;
