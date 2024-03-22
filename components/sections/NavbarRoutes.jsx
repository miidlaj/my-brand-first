'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Services } from './Service';
import Mobilenav from './MobileNav';

const NavbarRoutes = () => {
  const pathname = usePathname();

  const routes = [
    { label: 'Home', href: '/', active: pathname === '/' },
    { label: 'About Us', href: '/about', active: pathname === '/about' || pathname.startsWith('/about') },
    { label: 'Services', href: '/services/1', active: pathname === '/service' || pathname.startsWith('/service') },
    { label: 'Contact', href: '/contact', active: pathname === '/contact' },
    { label: 'Career', href: '/career', active: pathname === '/career' },
    { label: 'Blog', href: '/blog', active: pathname === '/blog' },
  ];

  return (
    <main className="flex flex-row justify-between items-center z-2 pr-6">
      <Link key='img' href='/'>
      <img
        src="/logo.png"
        alt="logo"
        className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] object-contain z-999 opacity-8"
      />
     </Link>
      <div className="lg:flex flex-row items-center gap-9 hidden">
        {routes?.map((route) => (
          <Link
            key={route.label}
            href={route?.href}
            className="text-center font-teko text-[20px] leading-[30px] opacity-1 text-foreground font-[500] uppercase tracking-[.03em] relative group shallow"
          >
            {route.label === 'Services' ? <Services /> : route.label}
            <div
              className={cn(
                'absolute w-full h-[2px] bg-[#FC8D00] scale-x-0 group-hover:scale-x-100 transition ease-in-out delay-0 duration-500',
                route.active && 'scale-x-100'
              )}
            />
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex flex-row gap-4 items-center">
        <img className="w-[40px] h-[40px] object-contain" src="/contact.png" alt="" />
        <div className="flex flex-col gap-y-0">
          <div className="font-[500] text-[25px] tracking-[.03em] uppercase font-teko leading-[18px] text-foreground">
            for enquiry
          </div>
          <div className="font-[400] text-[25px] tracking-[.03em] uppercase font-teko leading-[24px] text-foreground">
            +91 9113033835
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Mobilenav routes={routes} />
      </div>
    </main>
  );
};

export default NavbarRoutes;
