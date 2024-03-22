import Banner from "@/components/sections/Banner";
import { servicesDetails } from "@/lib/serviceDetails";
import ContactForm from "@/components/sections/ContactForm";
import ServiceCard from "@/components/sections/ServiceCard";
import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";

const ServiceIdPage = async ({ params }) => {
    
    const { serviceId } = params;

    
    const service = serviceId ? { ...servicesDetails.find(service => service.id === serviceId) } : null;

    return (
        <div className="flex flex-col gap-12 overflow-hidden">
            <Banner title={service.title} key={service.title} page='services' active={true} servicePage={service.title}/>
            <div className="lg:mt-20 mt-12 ">
                <div className="flex xl:flex-row  gap-11 flex-col lg:gap-9 xl:gap-14 px-8 lg:mt-1 mt-1 sm:mt-4">
                    <div className="flex flex-col text-left gap-10 xl:gap-18 xl:w-[61%]">    
                        <h2 className="font-teko text-4xl leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase relative hover:text-[#FC8D00]">
                            our digital services <span className="absolute bottom-0 ml-1 text-[#FC8D00]">.</span>
                        </h2>
                        <div className="font-rubik text-base font-normal leading-[2.125em] text-justify">
                            Mybrandfirst is a premier digital marketing agency committed to propelling brands into the digital spotlight. Our team of experts guides clients through the intricacies of digital marketing, offering personalized approaches to each project.
                            <br/>
                            <br/> What sets us apart is our unwavering commitment to excellence and innovation. We continuously monitor industry trends, experiment with new technologies, and refine our strategies for maximum effectiveness. Partnering with Mybrandfirst ensures dedication to your success. Embark on a digital journey with us today to unlock the full potential of your brand online.
                                                    </div>
                    </div>
                    <div className="flex flex-col gap-15 xl:w-[69%]  xl:ml-12 mt-7 pt-4 lg:pt-0">
                        <div className="xl:w-8/10 xl:pl-5">
                            <h2 className="font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] lg:text-[70px] lg:leading-[0.9em] font-normal lg:font-[400px] uppercase">
                                get in touch <span className="text-[#FC8D00]">.</span>
                            </h2>
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
           
            <div className="px-8 flex flex-col gap-14">
                <h2 className="font-teko text-[42px] leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase hover:text-[#FC8D00]">
                    {service.title} <span className="text-[#FC8D00]">.</span>
                </h2>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col  gap-11">
                        <div>
                            <img src={service.img} alt="service" className="object-cover border rounded-md w-full h-auto grayscale-[89%] hover:grayscale-0" />
                        </div>
                        <div className="font-rubik text-base font-normal leading-[2.125em] lg:px-4 px-3 text-justify">
                            {service.desc}
                        </div>
                        <div className="px-4 flex flex-col gap-12">
                            {service.active && 
                                service.shortDesc.map((item) => (
                                    <div key={item.title} className="flex flex-col gap-5 py-2">
                                        <h4 className="text-[36px] tracking-[1px] uppercase font-normal leading-[1.1em] font-teko">
                                            {item.title}
                                        </h4>
                                        <div className="font-rubik text-base font-normal leading-[2.125em] lg:px-4 px-3 text-justify">
                                            {item.desc}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col    ">
                        <ServiceCard service={service} title={service.title} key={service.title}/>
                    </div>
                </div>
            </div>
            <div className="">
                <Hero  title={service.title}/> 
            </div>
        </div> 
    );
};

export default ServiceIdPage;
