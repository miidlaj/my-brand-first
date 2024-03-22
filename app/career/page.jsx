import { Listings } from "@/components/constants/Listings";
import Banner from "@/components/sections/Banner";
import CareerCard from "@/components/sections/CareerCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner title="our openings" page="career" />
      <div>
        <div className=" flex flex-col justify-center items-center">
          <div className="text-center mt-12">
            <h4 className="leading-[.85em] text-[40px] lg:leading-[1.5rem] font-teko font-normal text-[#FC8D00]">
              our current openings
            </h4>
          </div>
          <div
            className="
            px-5
            md:px-7
            pt-10
            grid 
            grid-cols-1 
            sm:grid-cols-1
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-12
            "
          >
            {Listings.map((listing) => (
              <CareerCard key={listing.id} data={listing} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
