"use client";

import React from 'react';
import BackgroundSvg from "@/assets/images/HowItWorksbackground.svg";
import HowStep1 from "@/assets/images/step1.png";
import HowStep2 from "@/assets/images/step2.png";
import HowStep3 from "@/assets/images/step3.png";
import Image from 'next/image';

const HowItWorks = () => {
    const steps = [
        {
            image: HowStep1,
            stepNumber: 1,
            title: "Step 1: Call",
            description: "Sign up with your email and fill in the necessary details to get started.",
        },
        {
            image: HowStep2,
            stepNumber: 2,
            title: "Step 2: Biometric Visit",
            description: "Tailor your preferences and configure your settings for the best experience.",
        },
        {
            image: HowStep3,
            stepNumber: 3,
            title: "Step 3: Delivery by WhatsApp or Email",
            description: "Deploy your solution and begin leveraging its benefits immediately.",
        }
    ];

    return (
        <div className="how-it-works relative bg-gray-50 py-16">
            <div className="absolute inset-0 z-0">
                <Image src={BackgroundSvg} alt="Background" layout="fill" objectFit="cover" />
            </div>
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
                    How It Works..?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card   p-6 text-center relative flex justify-center items-center  flex-col">
                            <div className="relative w-56 h-56 mb-6">
                                <Image
                                    src={step.image}
                                    alt={`Step ${step.stepNumber}`}
                                    layout="fill"
                                    objectFit='contain'
                                    className="rounded-lg"
                                />
                                <div className="absolute inset-0  flex flex-col justify-center items-center rounded-lg">
                                    <h3 className="text-5xl font-extrabold">{`${step.stepNumber}`}</h3>
                                    <p className="text-lg font-medium">Step</p>
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
