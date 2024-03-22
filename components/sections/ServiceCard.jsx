import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesDetails } from "@/lib/serviceDetails";
import ServiceItems from "./ServiceItems";

const ServiceCard = ({ service, title }) => {
  return (
    <div className=''>
      <Card className="w-full bg-slate-900">
        <CardHeader className=''>
          <CardTitle>
            <div className="font-teko text-[24px] font-normal">ALL SERVICES</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {servicesDetails.map((item) => (
            <ServiceItems key={item.id} name={item} title={service.title} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
