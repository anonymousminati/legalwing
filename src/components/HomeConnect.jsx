
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import HomeConnect from '@/assets/images/HomeConnectSVG.svg';


export default function HomeConnectSection() {

    return <section className="bg-[#ffffff] h-screen w-full ">
        <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center h-full py-5 my-5 ">

            <div className="w-full md:w-1/2 lg:w-2/5 p-6 ">
                <Image src={HomeConnect} className="w-full" alt="Hero connect image" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6 md:p-10 flex flex-col gap-5 ">

                <p className="text-5xl font-light text-[#425066]">
                    Connect with our
                </p>
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                    <TypeAnimation
                        sequence={['L',
                            10,
                            'Legal Advisors', // Types 'One'
                        ]}
                        wrapper="p"
                        cursor={false}
                        repeat={1}
                        style={{ color: '#EA2C2C' }}
                    />

                </div>
                <p className="text-medium leading-9 text-[#425066]">
                Need expert legal advice for your rent agreement? Our experienced legal advisors are here to help. Whether you have questions or need personalized guidance, we’re just a call or message away.                </p>
                <button className="bg-[#3B73A7] text-white px-6 py-4 rounded-lg flex items-center space-x-2 hover:bg-blue-600 w-max">
                    <span>Talk to Expert</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    </section>

};
