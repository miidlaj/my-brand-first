<div className='w-full bg-orange-600 flex flex-row justify-center '>
    
     <div className='flex flex-row justify-between md:w-4/5 text-center'>
       <div className='flex flex-row justify-center items-center'>
         <img src="/contact-logo.png" alt="" className='bg-cover w-[250px]'/>        
       </div>  
       <div>
       <div className='w-3 h-4/5 bg-foreground border border-none rounded-xl ' >
        </div> 
       </div>
      
       <div className='flex flex-col justify-center items-center gap-5 '>
          <div className='flex flex-row gap-3 justify-center items-center '>
            <Contact />
            <div className='font-rubik text-[24px]  font-[500]'>
            Bindu Nambiar
            </div>
          </div>
          <div className='flex flex-row gap-3 justify-center items-center '>
           <Phone />
            <div className='font-rubik text-[24px] font-[500]'>
            +91 91130 33835
            </div>
          </div>
          <div className='flex flex-row gap-3 text-center '>
            <Mail />
            <div className='font-rubik text-[18px] font-normal'>
            Info@mybrandfirst.com
            </div>
          </div>
          <div className='flex flex-row gap-3 text-center '>
            <Phone />
            <div className='font-rubik text-[18px] font-normal'>
            www.mybrandfirst.com
            </div>
          </div>
          <div className='flex flex-row gap-3 text-center '>
          <MapPin />
            
            <div className='font-rubik text-[18px] font-normal'>
            Jayanagar, Bengaluru
            </div>
          </div>

        </div>
     </div>
    </div>







////////////////////////



'use client';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const initValues = { name: "", email: "", mobile: "", company: "" };

const initState = { isLoading: false, error: "", values: initValues };

const HomePage = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
  
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

      // send email
      try {
        const response = await fetch('api/contact-us', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(values)
        });

        const { success, error } = await response.json();

        if (success) {
          alert('Your inquiry has been submitted!');
        } else if (error) {
          console.error(error);
          alert('Error while submitting your inquiry: ' + error); // Corrected concatenation
        }
      } catch (error) {
        console.error(error);
        alert('Error while submitting your inquiry: ' + error); // Corrected concatenation
        setState((prev) => ({
          ...prev,
          isLoading: false,
         
        }));
      }
      setState((prev) => ({
        ...prev,
        isLoading: false,
       
      }));
  }

  return (
    <div className="space-y-8 w-full leading-[20px] font-raleway font-medium text-[15px]">
    
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
<div className="flex flex-col gap-4">
      <FormControl isRequired isInvalid={touched.fullName && !values.fullName} mb={5}>
        <FormLabel className="text-foreground">full Name</FormLabel>
        <Input
        className="rounded-2xl border bg-foreground text-slate-900" disabled={loading}
          type="text"
          name="fullName"
          errorBorderColor="red.300"
          value={values.fullName}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel className="text-foreground">Email</FormLabel>
        <Input
        className="rounded-2xl border bg-foreground text-slate-900" disabled={loading}
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.mobile && !values.mobile} mb={5}>
        <FormLabel className="text-foreground">Mobile Number</FormLabel>
        <Input
        className="rounded-2xl border bg-foreground text-slate-900" disabled={loading}
          type="number"
          name="mobile"
          errorBorderColor="red.300"
          value={values.mobile}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.company && !values.company} mb={5}>
        <FormLabel className="text-foreground">Company Name</FormLabel>
        <Input
        className="rounded-2xl border bg-foreground text-slate-900" disabled={loading}
          type="text"
          name="company"
          errorBorderColor="red.300"
          value={values.company}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.comapny || !values.mobile
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
    </div>
  );
}

export default HomePage
