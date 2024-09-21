"use client";

import React from 'react';
import BackgroundSvg from "@/assets/images/HowItWorksbackground.svg";
import HowStep1 from "@/assets/images/step11.png";
import HowStep2 from "@/assets/images/step22.png";
import HowStep3 from "@/assets/images/step33.png";
import Image from 'next/image';

const HowItWorks = () => {
    const steps = [
        {
            image: HowStep1,
            stepNumber: 1,
            title: "Step 1: Call",
            description: "Call us at 7709415315 to discuss your requirements. Our team will guide you through the necessary documents and processes.",
        },
        {
            image: HowStep2,
            stepNumber: 2,
            title: "Step 2: Biometric Visit",
            description: "book schedule a convenient time for the biometric verification at your location.",
        },
        {
            image: HowStep3,
            stepNumber: 3,
            title: "Step 3: Delivery by WhatsApp or Email",
            description: "Share the necessary documents with us online via email or WhatsApp for quick processing.",
        }
    ];

    // return (
    //     <div className="how-it-works relative bg-gray-50 py-16 w-full mb-12">
    //         <div className="absolute inset-0 z-0">
    //             <Image src={BackgroundSvg} alt="Background" layout="fill" objectFit="cover" />
    //         </div>
    //         <div className="relative z-10 container mx-auto px-6 lg:px-12">
    //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
    //                 How It Works..?
    //             </h2>
    //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //                 {steps.map((step, index) => (
    //                     <div key={index} className="step-card   p-6 text-center relative flex justify-center items-center  flex-col">
    //                         <div className="relative w-56 h-56 mb-6">
    //                             <Image
    //                                 src={step.image}
    //                                 alt={`Step ${step.stepNumber}`}
    //                                 layout="fill"
    //                                 objectFit='contain'
    //                                 className="rounded-lg"
    //                             />
    //                             <div className="absolute inset-0  flex flex-col justify-center items-center rounded-lg">
    //                                 <h3 className="text-5xl font-extrabold">{`${step.stepNumber}`}</h3>
    //                                 <p className="text-lg font-medium">Step</p>
    //                             </div>
    //                         </div>
    //                         <h4 className="text-2xl font-extrabold text-gray-800 mb-2">{step.title}</h4>
    //                         <p className="text-xl font-semibold text-gray-600">{step.description}</p>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className="how-it-works relative bg-gray-50 py-16 w-full mb-12">
            <div className="absolute inset-0 z-0">
                <Image src={BackgroundSvg} alt="Background" layout="fill" objectFit="cover" />
            </div>
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
                    How It Works..?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (


                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
                            
                            <div className="w-full h-64">
                            <Image
                                    src={step.image}
                                    alt={`Step ${step.stepNumber}`}
                                    className='rounded-t-lg '
                                />
                            </div>
                                
                            <div className="p-5 mt-6">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{step.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 ">{step.description}</p>
                               
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
