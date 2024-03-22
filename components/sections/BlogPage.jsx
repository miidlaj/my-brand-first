import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import BlogCard from './BlogCard';
import BlogCard3 from './BlogCard3';
import BlogCard2 from './BlogCard2';
import { Separator } from '../ui/separator';

const BlogPage = ({ blog }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 px-8 pl-10 h-full'>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <img src={blog?.img} alt="blog1" className='w-full object-cover h-full' />
        <div className='w-full py-8'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <Link className="uppercase font-[700] tracking-[2px] text-[12px] text-[#FC8D00] " href="/blog" key="id">
              {blog.category}
            </Link>

            <div className=' text-center items-center'>
              <h2 className='text-foreground leading-[50px] text-[40px] font-normal font-playfair_display tracking-[.8px] capitalize md:tracking-wide'>
                {blog.heading}
              </h2>
            </div>
            <div className='font-normal font-playfair_display italic text-[#9e9e9e]'>
              {blog.date}
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-[16px] text-[#c4c4c4] font-open_sans first-letter:font-playfair_display' >
                <p className='first-letter:text-7xl first-letter:font-[400] first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:font-playfair_display first-letter:uppercase first-letter:-mt-4 text-justify md:ml-5 xl:ml-5 md:mr-3 lg:mr-0 font-rubik  leading-[2.1em] tracking-0'>
                  {blog.introduction} :
                </p>
              </div>
              {blog.desc.map((item) => (
                <div key={item.id} className='gap-4 flex flex-col mt-5'>
                  <div className='text-[24px] text-slate-50 font-open_sans tracking-wide leading-[32.6px] w-full  '>
                    <strong className='text-left font-playfair_display'>
                      {item.title}
                    </strong>
                  </div>
                  <div>
                    <p className='text-[16px] text-[#c4c4c4] tracking-0 font-rubik  leading-[2.1em] tracking-0]
                    text-justify'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              {blog.conclusion &&
              <div className='pt-12'>
                <div className='text-[16px] text-foreground tracking-0 font-rubik  leading-[2.1em] tracking-0]
                  text-[#c4c4c4] text-justify '>
                {blog.conclusion}
                </div>
              </div>
              }
            </div>
          </div>
          <div></div>
        </div>
      <Separator className="w-full"/> 

      </div>

      <div className='flex-[.4] sm:px-12 lg:px-0 sm:mx-12 lg:mx-0 '>
        <div className='w-full lg:sticky lg:-top-60 '>
         
          <BlogCard2 />
          <BlogCard />
      
          <div className='lg:hidden flex '>
          <BlogCard3 />
           </div>
        
        </div>
      </div>
      {/* <Separator className="w-full"/> */}
    </div>
  );
}

export default BlogPage;
