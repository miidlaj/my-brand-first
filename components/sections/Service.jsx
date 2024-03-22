import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { servicesDetails } from '@/lib/serviceDetails'; // Import the specific named export from '@/lib'
import Link from 'next/link';

export function Services() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="text-center font-teko text-[20px] leading-[30px] font-[500] uppercase tracking-[.03em]">Services</div>
      </HoverCardTrigger>
      <HoverCardContent className="w-70">
        <div className="flex flex-col gap-3 px-[10px] py-3">
          {/* Check if servicesDetails is defined and not empty before mapping */}
          {servicesDetails && servicesDetails.length > 0 && servicesDetails.map((service) => (
            <Link key={service.id} className="font-teko text-[20px] leading-[24px] font-[400] uppercase tracking-[.03em] text-left hover:text-orange-500" href={`/services/${service.id}`} shallow>
              {service.title}
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
