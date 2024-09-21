
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import HeroRightPartImage from '@/assets/images/heroRightPart.svg';
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import ContactDetailsForm from "./ContactDetailsForm";



export default function HomeHeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isContactDetailsFormOpen, setIsContactDetailsFormOpen] = useState(false);


  // Function to toggle the visibility
  const openContactForm = () => {
    setIsContactFormOpen(true); // Open the component
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false); // Close the component
  };
  const openContactDetailsForm = () => {
    setIsContactDetailsFormOpen(true); // Open the component
  };

  const closeContactDetailsForm = () => {
    setIsContactDetailsFormOpen(false); // Close the component
  };


    return <section className="bg-[#FFE115] h-max w-full">
    <div className="flex flex-col-reverse gap-10 lg:flex-row justify-start md:justify-center items-center p-5 md:px-24 md:py-15 h-full md:h-max">
      <div className=" w-full  lg:w-1/2 g-red-500">
        <div className="flex flex-col justify-center items-start gap-5">
          <div className="flex flex-wrap text-3xl md:text-4xl lg:text-5xl font-extrabold gap-5">
            <p className="text-[#425066] ">Effortless &nbsp;</p>
            <TypeAnimation
              sequence={[
                'Rent Agreements in Pune,', // Types 'One'
                1500, // Waits 1s
                // Types 'Three' without deleting 'Two'

              ]}
              wrapper="span"
              cursor={false}
              repeat={1}
              style={{ color: '#EA2C2C' }}
            />
          </div>
          <div className="flex flex-wrap text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <p className="text-[#425066] ">Anytime, Anywhere&nbsp;</p>

          </div>
          <p className="text-[#425066] font-bold text-lg md:text-xl lg:text-2xl">
            At Most Affordable Rates <br></br>
            Free Police Verification</p>

        </div>

        <div className="flex space-x-4 py-4 md:py-16  w-max">
          <button className="bg-[#3d9c3d] text-white px-6 py-4 rounded-lg flex items-center space-x-2 hover:bg-red-600" onClick={openContactForm}>
            <span>Try for Free</span>
            <span>→</span>
          </button>
          {/* TODO: create a form which will show email and mobile no */}
          <button className="bg-[#3B73A7] text-white px-6 py-4 rounded-lg flex items-center space-x-2 hover:bg-blue-600" onClick={openContactDetailsForm}>
            <span>Talk to Expert</span>
            <span>→</span>
          </button>
        </div>


      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">

        <Image className="w-full" src={HeroRightPartImage} alt="hero right image"></Image>

      </div>


      {/* <div className="relative w-[325px] md:w-[490px] md:scale-100 lg:scale-150">
          <div className="absolute  z-10 left-0 top-0 flex flex-col gap-6 ">
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
            <div className="flex w-[130px] md:w-[240px]">

              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
              <div className="w-[17px] md:w-[30px]"></div>
            </div>
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
            <div className="flex w-[130px] md:w-[240px]">

              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
              <div className="w-[17px] md:w-[30px]"></div>
            </div>
            <div className="flex w-[130px] md:w-[240px]">
              <div className="w-[17px] md:w-[30px]"></div>
              <p className="p-2 bg-white rounded-md shadow-md text-center text-[#425066] w-full">
                legal expert
              </p>
            </div>
          </div>

          <Image className="absolute  right-0 top-0 image-white-gray-border rounded-full w-[260px] h-[260px] md:w-[300px] md:h-[300px] " width={300} height={300} src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Image>

        </div> */}
        
          {isContactFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-5 rounded-lg">
                <ContactForm /> {/* Render the component */}
                <button
                  className="mt-4 bg-red-500 text-white p-2 rounded"
                  onClick={closeContactForm} // Function to close the component
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {isContactDetailsFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-5 rounded-lg">
                <ContactDetailsForm /> {/* Render the component */}
                <button
                  className="mt-4 bg-red-500 text-white p-2 rounded"
                  onClick={closeContactDetailsForm} // Function to close the component
                >
                  Close
                </button>
              </div>
            </div>
          )}
        

    </div>
  </section>
    
};
