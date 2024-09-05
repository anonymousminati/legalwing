
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import HomeAbout from '@/assets/images/HomeAboutUs.svg';


export default function HomeAboutUsSection() {

    return <section className="bg-[#ffffff] min-h-screen  w-full mb-12">
        <div className="relative h-full">

            <div className="absolute top-0 w-full flex flex-col md:flex-row justify-around items-center h-full py-5 my-32">
                <div className="w-full md:w-1/2 lg:w-1/3 p-6 md:p-10 flex flex-col gap-5 ">

                    <p className="text-5xl font-light text-[#425066]">
                        Trust your future &
                    </p>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        <TypeAnimation
                            sequence={['A',
                                10,
                                'About Us', // Types 'One'
                            ]}
                            wrapper="p"
                            cursor={false}
                            repeat={1}
                            style={{ color: '#EA2C2C' }}
                        />

                    </div>
                    <p className="text-medium leading-9 text-[#425066]">
                        Since 2018, we have leveraged rent agreement service into business value by automating activities, enhancing workflow, and increasing productivity. We are a committed service provider for all types of rent agreements. Whether commercial or residential, we will deliver fast and effective support that will optimize your time and reduce stress .
                    </p>

                </div>
                <div className="w-full md:w-1/2 lg:w-2/5 p-6 ">
                    <Image src={HomeAbout} className="w-full" alt="Hero Right Part Image" />
                </div>
            </div>
            <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFE115" fillOpacity="1" d="M0,0L34.3,16C68.6,32,137,64,206,80C274.3,96,343,96,411,90.7C480,85,549,75,617,58.7C685.7,43,754,21,823,16C891.4,11,960,21,1029,37.3C1097.1,53,1166,75,1234,122.7C1302.9,171,1371,245,1406,282.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </div>
    </section>

};
