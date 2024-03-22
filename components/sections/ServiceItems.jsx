import React from 'react'
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ServiceItems = ({name,title}) => {
  const isActive = name.title === title
  return (
    <>
          <Link key={name.id} href={`/services/${name.id}`} shallow>
            <Button variant="service" size="sm" className= {cn("w-full py-5 md:py-7 xl:py-8 flex flex-row bg-slate-900           justify-between ", isActive && 'bg-primary text-primary-foreground' )}>
              <div className="text-[16px] font-normal leading-[48px] z-1 capitalize font-rubik">
                {name.title}
              </div>
               <ChevronRight />
            </Button>
          </Link>
    </>
  )
}

export default ServiceItems