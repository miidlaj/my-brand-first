import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select";
import { servicesDetails } from "@/lib/serviceDetails";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function MobileServices() {
  return (
    <Select>
      <SelectTrigger className=" flex flex-row">
        <div className="text-left font-teko text-[20px] leading-[24px] text-foreground font-[500] uppercase tracking-[1px] underline hover:text-[#FC8D00]">Services</div>
        <ChevronDown className="data-[state=open]:rotate-180" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {servicesDetails && servicesDetails.length > 0 && servicesDetails.map((service) => (
            <div key={service.id} className="flex flex-col gap-3 px-[10px] py-3">
              <Link href={`/services/${service.id}`} shallow>
                <div className="font-teko text-[20px] leading-[24px] font-[400] uppercase tracking-[.03em] text-left">{service.title}</div>
              </Link>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
