"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileIcon } from "lucide-react";

export default function CareerForm({ data, title }) {
  const initValues = {
    name: "",
    email: "",
    number: "",
    agency: "",
    salary: "",
    package: "",
    qualification: "",
    experience: "",
    file: null,
  };
  const initState = { isLoading: false, error: "", values: initValues };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { toast } = useToast();
  const { values, isLoading, error } = state;
  const router = useRouter();

  // Function to handle onBlur event
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  // Function to handle form input changes
  const handleChange = (name, value) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const fileInputRef = React.useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!validateFileSize(file)) {
      toast({
        variant: "destructive",
        description: "Please select a file smaller than 5 MB.",
      });
      fileInputRef.current.value = null;
      return;
    }
    if (!validateFileType(file)) {
      toast({
        variant: "destructive",
        description: "Please select a valid file (PDF, DOC, DOCX, or TXT)",
      });
      fileInputRef.current.value = null;
      return;
    }

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        file: e.target.files[0],
      },
    }));
  };

  const validateFileSize = (file) => {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    const isValidSize = file.size <= MAX_FILE_SIZE;
    return isValidSize;
  };
  const validateFileType = (file) => {
    const acceptedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];
    const isValidType = acceptedTypes.includes(file.type);

    return isValidType;
  };

  const onSubmit = async (e) => {
    if (
      !values.name ||
      !values.email ||
      !values.number ||
      !values.experience ||
      !values.qualification ||
      !values.agency ||
      !values.file ||
      !values.package ||
      !values.salary
    ) {
      toast({
        variant: "destructive",
        description: "Please complete all required fields.",
      });
      return;
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    //create form data
    const formData = new FormData();

    formData.append("title", title);
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const value = values[key];
        if (value instanceof File) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value);
        }
      }
    }

    // send email
    try {
      const response = await fetch("api/career-form", {
        method: "POST",

        body: formData,
      });

      const { success, error } = await response.json();

      if (success) {
        toast({
          variant: "primary",
          title: "Your details has been sent.",
          description: "Thank you for your contact, we will get in touch soon",
        });
        setState(initState);
        router.refresh();
      } else if (error) {
        console.error(error);

        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      // Corrected concatenation
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <Dialog className="bg-transparent">
      <DialogTrigger>
        <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00]         hover:bg-foreground px-[60px] py-[15px] rounded-lg hover:text-black uppercase">
          Apply now
        </Button>
      </DialogTrigger>

      <DialogContent className="border border-l-2 px-12 font-rubik">
        <DialogHeader>
          <DialogTitle className="font-playfair_display text-[25px] capitalize">
            Let's Grow Together
          </DialogTitle>
          <DialogDescription className="font-raleway text-[20px] capitalize text-[#FC8D00] font-[700]">
            {title}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 w-full">
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel className="font-rubik">Name</FormLabel>
            <Input
              className="rounded-lg border w-full py-[7px] bg-foreground mt-2 text-slate-900 px-3"
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel className="font-rubik">Email</FormLabel>
            <Input
              className="rounded-lg border w-full py-[7px] bg-foreground mt-2 text-slate-900 px-3"
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.number && !values.number}
            mb={5}
          >
            <FormLabel className="font-rubik ">Contact Number</FormLabel>
            <Input
              className="rounded-lg border w-full py-[7px] bg-foreground mt-2 text-slate-900 px-3"
              type="tel"
              name="number"
              errorBorderColor="red.300"
              value={values.number}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
              maxLength={10}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.qualification && !values.qualification}
            mb={5}
          >
            <FormLabel className="font-rubik">Qualification </FormLabel>
            <Input
              className="rounded-lg border w-full py-[7px] bg-foreground text-black mt-2  px-3"
              type="text"
              name="qualification"
              errorBorderColor="red.300"
              value={values.qualification}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.experience && !values.experience}
            mb={5}
          >
            <FormLabel className="font-rubik">
              How many years of work experience do you have into SEO?
            </FormLabel>
            <Input
              className="rounded-lg border w-full py-[7px] bg-foreground mt-2 text-black  px-3"
              type="text"
              name="experience"
              errorBorderColor="red.300"
              value={values.experience}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.agency && !values.agency}
            mb={5}
          >
            <FormLabel className="font-rubik ">
              Do you have experience of working in digital marketing agency?
              (yes/no)
            </FormLabel>
            <Input
              className="rounded-lg border text-black w-full py-[7px] bg-foreground mt-2  px-3"
              type="text"
              name="agency"
              errorBorderColor="red.300"
              value={values.agency}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.salary && !values.salary}
            mb={5}
          >
            <FormLabel className="font-rubik ">Current Salary (CTC)?</FormLabel>
            <Input
              className="rounded-lg border text-black w-full py-[7px] bg-foreground mt-2 px-3"
              type="text"
              name="salary"
              errorBorderColor="red.300"
              value={values.salary}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.package && !values.package}
            mb={5}
          >
            <FormLabel className="font-rubik ">Expected Package?</FormLabel>
            <Input
              className="rounded-lg border text-black w-full py-[7px] bg-foreground mt-2  px-3"
              type="text"
              name="package"
              errorBorderColor="red.300"
              value={values.package}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.{" "}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.file && !values.file}
            mb={5}
          >
            <FormLabel className="font-rubik ">
              Upload Resume (PDF, DOC, DOCX, TXT | Max 5 MB)
            </FormLabel>
            <Input
              className="rounded-lg border text-black w-full py-[7px] bg-foreground mt-2  px-3"
              type="file"
              name="file"
              errorBorderColor="red.300"
              accept=".pdf,.doc,.docx,.txt"
              ref={fileInputRef}
              onChange={(e) => handleFileChange(e)}
              onBlur={onBlur}
            />
            <FormErrorMessage className="text-red-800">
              Please complete this required field.
            </FormErrorMessage>
          </FormControl>
          {values.file && (
            <Alert>
              <FileIcon className="h-4 w-4" />
              <AlertTitle>Uploaded file</AlertTitle>
              <AlertDescription>{values.file.name}</AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button
            className="bg-[#FC8D00] text-foreground px-8 py-3 rounded-lg hover:bg-slate-100 opacity-100 hover:text-black"
            isLoading={isLoading}
            // disabled={!values.fullName || !values.email || !values.company || !values.mobile}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
