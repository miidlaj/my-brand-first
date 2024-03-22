import React from 'react';
import { Contact, Link, Mail, MapPin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';

const ContactList = () => {
  return (
    <div className="w-full flex items-center bg-center bg-cover bg-fixed py-12"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/contacts11.jpg)'
      }}
    >
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-3">

        <div className="flex-1 flex justify-center items-center">

          <div className="px-8 w-full justify-center items-center text-center md:mx-auto">

            <div className="flex flex-col gap-4 text-right bg-white/70 text-black backdrop-opacity-10 backdrop-invert px-12 py-6 rounded-lg w-full md:w-3/5 sm:mx-auto lg:w-4/5 sm:w-4/5">
              <div className="flex flex-row gap-3 items-center">
                <Contact className="" />
                <div className="font-teko text-[24px] font-[500]">Bindu Nambiar</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <Phone className="" />
                <div className="font-teko text-[24px] font-[500] leading-[.8em]">+91 91130 33835</div>
              </div>

              <div className="flex flex-row gap-3">
                <Mail className="" />
                <div className="text-[18px] font-normal font-teko">Info@mybrandfirst.com</div>
              </div>

              <div className="flex flex-row gap-3">
                <Link className="" />
                <div className="font-teko text-[18px] font-normal">www.mybrandfirst.com</div>
              </div>

              <div className="flex flex-row gap-3">
                <MapPin className="" />
                <div className="font-teko text-[18px] font-normal text-right">Jayanagar, Bengaluru</div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
          <div className="text-left flex flex-col gap-3">
            <ContactCard icon={<MapPin />} content="Jayanagar, Bangalore." href="https://maps.app.goo.gl/rq6NNmw2b4KuN9PTA" />
            <ContactCard icon={<Mail />} content="Info@mybrandfirst.com" href="mailto:Info@mybrandfirst.com" />
            <ContactCard icon={<Phone />} content="+91 91130 33835" href="tel:+919113033835" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactList;
