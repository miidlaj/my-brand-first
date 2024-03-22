import React from 'react'
import { blogNotes } from '@/components/constants/BlogNotes';
import BlogPage from '@/components/sections/BlogPage';
import Banner from '@/components/sections/Banner';
import BlogNav from '@/components/sections/BlogNav';
import ServiceCarousal from '@/components/sections/ServiceCarousal';

const page = async ({params}) => {
  
  const { blogId } = params;
 // const blog = blogId ? { ...blogNotes.find(blog => blog.id === blogId), key: 'blog.id' } : null;

  const blog= blogNotes.find(blog => blog.id === blogId);
  return (
    <div className='w-full '>
        <BlogNav />
        <ServiceCarousal/>
        <div className=''>
          <BlogPage blog={blog} />
        </div>
        
    </div>
  
  )
}

export default page