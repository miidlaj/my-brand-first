import { servicesDetails } from '@/lib/serviceDetails'
import Link from 'next/link'
import React from 'react'
import { Contact, Mail, MapPin, Phone } from 'lucide-react';


const DetailedFooter = () => {
  return (
    <div className='px-12 flex flex-col lg:flex-row gap-12  py-10 w-full'>

     <div className='flex flex-col md:flex-row gap-12 flex-1 '>
      <div className='lg:flex-[.6] md:flex-[.5]  flex flex-col gap-8 md:pl-10 lg:pl-0'>
        <div className='text-left '>
        <div className='text-[20px] font-[600] uppercase font-teko text-[#FC8D00] text-left'>
          MYBRANDFIRST
        </div>
        </div> 
        <div className='text-15px font-rubik text-left'>
          <span className='text-[#FC8D00]'>Mybrandfirst</span> is a one of the top digital company in Bangalore, India .At Mybrandfirst, we don’t just create campaigns; we craft success stories.  
        </div>
      </div>
       

      <div className='flex flex-col gap-8 md:flex-[.5] lg:flex-[.3] md:items-center'>
        <div className='text-[20px] font-[600] uppercase font-teko text-[#FC8D00] '>
          useful links
        </div>
        <div className='flex flex-col gap-3 tracking-wider '>
          <Link key='home' href='/' className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
            Home
          </Link>
          <Link key='about' href='/about' className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
            About
          </Link>
          <Link key='blog' href='/blog' className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
            Blog
          </Link>
          <Link key='contact' href='/contact' className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
            contact
          </Link>
          <Link key='career' href='/career' className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
            career
          </Link>
         
        </div>
      </div>
      </div> 

     <div className='flex md:flex-row gap-12 flex-1 flex-col'>
      <div className='lg:flex-[.6]  md:flex-[.5] flex flex-col gap-8 lg:items-center md:px-10 lg:px-0'>
        <div className='text-[20px] font-[600] uppercase font-teko text-[#FC8D00] lg:pr-5 lg:mr-4'>
          digital services
        </div>
        <div className='flex flex-col gap-2 tracking-wide '>
          {servicesDetails.map((item) => (
            <Link className="text-left" key={item.id} href={`/services/${item.id}`} shallow>
             <div className='text-15px font-rubik capitalize hover:text-[#FC8D00]'>
              {item.title}
              </div>
            </Link>
          ))}
           
        </div>
      </div>


     

      


      <div className='lg:flex-[.5]  md:flex-[.5] flex flex-col gap-8 md:ml-12 md:pl-12 md:-mr-12 md:-pr-12 lg:ml-0 lg:pl-0 lg:-mr-0 lg:-pr-0 '>
        <div className='text-[20px] font-[600] uppercase font-teko text-[#FC8D00] md:-mr-12 lg:-mr-0 lg:-ml-0 md:ml-5'>
          contact
        </div>
        <div className='flex flex-col gap-3 md:mr-11 lg:mr-0'>
          <div className="flex flex-row gap-3 items-center">
                <Contact size={20} className="text-slate-500" />
                <div className="font-rubik text-[15px] hover:text-[#FC8D00]">Bindu Nambiar</div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Phone size={20} className='text-slate-500' />
                <div className="font-rubik text-[15px] hover:text-[#FC8D00]">+91 91130 33835</div>
              </div>

              <div className="flex flex-row gap-3">
                <Mail size={20} className="text-slate-500" />
                <div className="font-rubik text-[15px] hover:text-[#FC8D00]">Info@mybrandfirst.com</div>
              </div>


              <div className="flex flex-row gap-3">
                <MapPin size={20} className="text-slate-500" />
                <div className="font-rubik text-[15px] hover:text-[#FC8D00]">Jayanagar, Bengaluru</div>
              </div>
        </div>
      </div>
      
      </div> 
    </div>
  )
}

export default DetailedFooter