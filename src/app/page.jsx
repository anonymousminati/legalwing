"use client";

import Image from "next/image";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeAboutUsSection from "@/components/HomeAboutUs";
import HomeConnectSection from "@/components/HomeConnect";
import FAQ from "@/components/FaqComponent";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCarousel from "@/components/TestimonialCarousel";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <HomeHeroSection />
      <HomeAboutUsSection/>
      <HomeConnectSection/>
      <HowItWorks/>
      <TestimonialCarousel/>
      
      <FAQ/>
    </main>
  );
}
