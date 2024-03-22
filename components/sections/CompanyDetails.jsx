import React from 'react';
import DetailsCard from './DetailsCard';
import { chooseTabs } from '../constants/FormItems';

const CompanyDetails = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center gap-12">
        <h3 className="text-center font-teko text-5xl leading-11 font-normal uppercase">Why Choose Mybrandfirst?</h3>
        <div className="text-justify font-rubik text-base font-normal leading-8 w-full px-3 ">
          At MyBrandFirst, we believe in putting your brand first. Our passion lies in crafting digital marketing strategies that elevate your brand's presence, drive engagement, and deliver measurable results. With a team of creative minds and digital experts, we're here to transform your online presence and help you achieve your business goals.
        </div>
      </div>
      <div className="px-5 md:px-7 pt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-12">
        {chooseTabs.map((listing) => (
          <DetailsCard
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
