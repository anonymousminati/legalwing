
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import AboutImage1 from "@/assets/images/aboutusimage1.jpg"
import Image from "next/image";
import WhoWeAre from "@/assets/images/whoweare.svg"
import WorldMap from "@/assets/images/worldmap.svg"

export default function About() {
    return (<>
        <section className="text-center py-12 bg-gray-50">
            <h1 className="text-4xl font-bold text-[#34113F] mb-4">About Us</h1>
            <p className="text-lg text-[#475467] max-w-xl mx-auto mb-8">
                Since 2018, we have leveraged rent agreement service into business value by automating activities, enhancing workflow, and increasing productivity.
            </p>
            <div className="w-10 h-10 text-gray-700 mx-auto"><ArrowDownIcon /></div>
        </section>
        <section className="text-center py-12 bg-[#3E555C] flex flex-col md:flex-row justify-center items-center gap-16">
            <Image src={AboutImage1} className="w-3/12 rounded-[47px] shadow-lg shadow-gray-400 aspect-square object-cover" />
            <div className="flex flex-col w-4/12 justify-center items-start gap-10">
                <p className="text-5xl font-extrabold text-white">What is Legal Wing?</p>
                <p className="text-white text-start">We are a committed service provider for all types of rent agreements. Whether commercial or residential, we will deliver fast and effective support that will optimize your time and reduce stress.</p>
                <button type="button" className="text-xl text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 w-max inline-flex">
                    <svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                    Contact Us
                </button>
            </div>
        </section>
        <section className="flex flex-col gap-10 my-16 bg-white justify-center items-center">

            <p className="text-5xl font-bold text-[#DC1F27] ">More About Us</p>
            <div className="w-11/12 md:w-6/12">
                <p className="text-md text-center">At LegalWing we strive to provide an exceptional rental experience to our valued customers. Our rental agreement is designed to establish clear terms and conditions that protect both parties involved.</p>

            </div>
            <div className="flex justify-center items-center relative w-full h-full p-5">

                <Image src={WorldMap} className="absolute w-full h-full object-cover absolute top-0 left-0" />
                <Image src={WhoWeAre} className="w-full md:w-2/3 lg:w-1/2 aspect-square" />
            </div>
        </section>
        <section className="w-full">
            <div className="flex items-center justify-center  bg-white p-24">
                <div className="bg-white p-6 rounded-lg  w-full">
                    <h1 className="text-2xl font-bold mb-4">
                        By entering into a rental agreement with us, you acknowledge and agree to abide by the following guidelines:
                    </h1>
                    <ul className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>The rental period starts on the agreed-upon date and ends on the designated return date.</li>
                        <li>You are responsible for the care and maintenance of the rented item(s) and will return them in the same condition as received.</li>
                        <li>Any damages or loss incurred during the rental period will be your responsibility, and appropriate charges will apply.</li>
                        <li>Payment terms, including rental fees, security deposit, and any additional charges, will be outlined in the agreement.</li>
                        <li>We reserve the right to terminate the rental agreement if any terms are violated. By signing below, you affirm your understanding and acceptance of these terms.</li>
                    </ul>
                    <p className="mt-6 font-bold">
                        We look forward to providing you with a seamless and enjoyable rental experience.
                    </p>
                </div>
            </div>
        </section>

    </>

    );
};
