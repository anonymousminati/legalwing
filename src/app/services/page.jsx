"use client";

import Image from 'next/image';
import ServiceHero from '@/assets/images/ServiceHero.jpg';
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { HomeModernIcon } from '@heroicons/react/24/solid'; // Example icon

import rentAgreementImage from '@/assets/images/rentAgreement.png';
import leaseAgreementImage from '@/assets/images/leaseAgreement.png';
import AnimatedCard from '@/components/AnimatedCard';



export default function Services() {
    const cardData = [
        {
            title: "Clearly defines the terms of the tenancy",
            text: "It outlines the length of the tenancy, the amount of rent to be paid, and any rules or regulations regarding the use of the property.",
            currentIndex: 1
        },
        {
            title: "Establishes a legal relationship",
            text: "It is a legally binding document that can be used in court to settle disputes between the landlord and tenant.",
            currentIndex: 2
        },
        {
            title: "Protects the rights of both parties",
            text: "It sets out the rights and responsibilities of both the landlord and tenant, helping to avoid misunderstandings and disputes.",
            currentIndex: 3
        },
        {
            title: "Serves as evidence",
            text: "It can be used as evidence in court if there is a dispute over payment, damages or other issues as long as they comply with the lease terms.",
            currentIndex: 4
        },
        {
            title: "Maintaining Property",
            text: "It ensures that the tenant is aware of their obligations to maintain the property and keep it in good condition. This allows tenants to budget their expenses more effectively.",
            currentIndex: 5
        },
        {
            title: "Resolve disputes",
            text: "It can be used as a reference in case of any future legal disputes or issues. It ensures that tenants are protected by law and can take legal action if their rights are violated.",
            currentIndex: 6
        }
    ];


    return <div>
        <section className="relative flex items-center justify-center text-center h-max py-10 bg-gray-900  text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${ServiceHero.src})` }}></div>
            <div className="relative z-10 px-6 py-10 lg:px-12 mx-24">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Services</h1>
                <p className="text-lg lg:text-xl leading-8">
                    In India, rental agreements are crucial legal documents protecting both property owners and tenants.
                    They should be precise and include essential clauses and property details. There are two main types:
                    agreements governed by rent control laws and Leave and License Agreements.
                </p>
                <div className="w-10 h-10 mt-12  mx-auto"><ArrowDownIcon /></div>

            </div>
        </section>
        <section className="relative py-12 px-4 bg-white z-0 my-20 ">
            <div className="absolute left-0 top-0 bg-[#619EFF] opacity-20 h-full aspect-square z-[-2] rounded-tr-[50%]"></div>
            <div className="text-center mb-12 z-10">
                <h2 className="text-4xl font-bold text-red-600">Services Types</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-32 z-10">

                {/* Rent Agreement Card */}
                <div className="bg-gradient-to-r bg-gray-300 rounded-3xl shadow-2xl shadow-gray-600 border-2 border-gray-400 p-9 w-96 h-[500px] max-w-sm overflow-hidden ">
                    <div className="flex justify-center mb-4 w-full h-52 overflow-hidden rounded-3xl">
                        <Image src={rentAgreementImage} alt="Rent Agreement" className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Rent Agreement</h3>
                    <p className="text-gray-700 text-center text-sm">
                        A rental agreement is a crucial legal document that clearly outlines the terms, conditions, and responsibilities
                        of both tenants and landlords. It provides legal protection, specifies rent details, and ensures clarity
                        on the duration, renewal, and maintenance obligations, preventing misunderstandings and disputes.
                    </p>
                </div>

                {/* Lease Agreement Card */}
                <div className="bg-gradient-to-r bg-gray-300 rounded-3xl shadow-2xl shadow-gray-600 border-2 border-gray-400 p-9 w-96 h-[500px] max-w-sm overflow-hidden ">
                    <div className="flex justify-center mb-4 w-full h-52 overflow-hidden rounded-3xl">
                        <Image src={leaseAgreementImage} alt="Lease Agreement" className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Lease Agreement</h3>
                    <p className="text-gray-700 text-center text-sm">
                        A lease agreement is a legal contract that outlines the terms of renting a property, including rent, duration,
                        and responsibilities. It protects both parties by defining tenant rights, property care, and dispute resolution.
                        Clear guidelines for security deposits and lease termination ensure a smooth tenancy.
                    </p>
                </div>
            </div>

            {/* Join Us Button */}
            <div className="mt-12 flex justify-center">
                <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 px-6 rounded-full shadow-lg text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition duration-300">
                    Join Us Now!
                </button>
            </div>
        </section>

        <section className="flex flex-col justify-center">


            <div className="text-center mb-12 z-10">
                <h2 className="text-4xl font-bold text-red-600">More Service</h2>
            </div>
            <div className="text-center text-md mb-10">We are committed to providing exceptional customer service and support throughout your rent agreement journey.</div>
            <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 relative z-0 ">
                <div className="absolute h-full w-full top-0 left-0 bg-[#E4A321] opacity-20 -z-10 rounded-tr-full rounded-bl-full"></div>
                {cardData.map((card, index) => (
                    <AnimatedCard
                        key={index}
                        title={card.title}
                        text={card.text}
                        currentIndex={card.currentIndex}
                        icon={
                            <svg
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                // stroke="#ffffff"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className='size-12'
                            >
                                <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
                                <line y2="21" x2="16" y1="21" x1="8"></line>
                                <line y2="21" x2="12" y1="17" x1="12"></line>
                            </svg>
                        }
                    />
                ))}
            </div>

        </section>
        <section className="py-12 px-4 bg-white text-center w-full md:w-1/2 flex justify-center items-center  flex-col mx-auto">
      {/* <div className="mb-6">
        <img src="/path/to/your/image.png" alt="Legal Wing" className="mx-auto h-16 w-16" />
      </div> */}

      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Know About Legal Wing
      </h2>

      <p className="text-gray-600 mb-6">
        We form meaningful relationships with our clients. These connections are important to us.
      </p>

      <p className="text-gray-600 mb-6">
        We are a team of responsible and disciplined individuals who believe in possibilities. We are
        the trustworthy combination of Technology, the Government’s latest E-initiatives, and doorstep
        service, which gives you a stress-free experience.
      </p>

      <p className="text-gray-600 mb-8">
        We are a government-approved service provider. We provide all types of agreement services, that
        too at the doorstep. Excellence services at our doorstep at low and transparent charges, make us
        stand out in the crowd.
      </p>

      <button className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        Join Us
      </button>
    </section>

    <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

{/* <form>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                Text Field
            </label>
        </div>
        <div className="md:w-2/3">
            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value=""/>
            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
        </div>
    </div>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <input type="text" className='form-input block w-full focus:bg-white'/>
        </div>
        
    </div>

    <div className="md:flex mb-6">
        <div className="md:w-1/3">
            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                Text Area
            </label>
        </div>
        <div className="md:w-2/3">
            <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea>
            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
        </div>
    </div>

    <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
            <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Save
            </button>
        </div>
    </div>
</form> */}

</div>
    </div>;

};
