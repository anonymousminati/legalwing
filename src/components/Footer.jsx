import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { CompanyLogo } from './CompanyLogo';
import Link from 'next/link';


// const Footer = () => {
//     return (
//         <footer className="bg-yellow-50 py-8">
//             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
//                 <div className="flex flex-col divide-y-3 justify-center items-center">
//                     <div className="flex-shrink-0 mb-4 md:mb-3">
//                         <CompanyLogo />
//                     </div>

//                     <div className="flex space-x-8 mb-4 md:mb-0 py-5">
//                         <Link href="#about" className="text-gray-800 font-semibold">ABOUT US</Link>
//                         <Link href="#services" className="text-gray-800 font-semibold">SERVICES</Link>
//                         <Link href="#process" className="text-gray-800 font-semibold">PROCESS</Link>
//                         <Link href="#contact" className="text-gray-800 font-semibold">CONTACT US</Link>
//                     </div>
//                 </div>
//                 <div className="text-right space-y-2">
//                     <div className="flex items-center space-x-2">
//                         <MapPinIcon className="h-5 w-5 text-orange-500" />
//                         <span>Office No. 6, Kadekar Plaza, D.P. Road, Kothrud, Pune 411038</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <PhoneIcon className="h-5 w-5 text-orange-500" />
//                         <span>+91 9067801412</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <EnvelopeIcon className="h-5 w-5 text-orange-500" />
//                         <span>reg.rentagreement@legalwing.in</span>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

const Footer = () => {
    return <footer className="bg-slate-200">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <div className="text-teal-600">
                        <CompanyLogo />
                    </div>

                    <p className="mt-4 max-w-xs text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                        molestias.
                    </p>

                    <ul className="mt-8 flex gap-6">
                        <li>
                            <Link
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className=" text-gray-700 transition hover:opacity-75"
                            >


                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#"
                                rel="noreferrer"
                                target='_blank'
                                className=" text-gray-700 transition hover:opacity-75"
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" className='h-6 w-6' viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </Link>
                        </li>


                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Contact Us</p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li>
                                <a
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="#"
                                >
                                    <EnvelopeIcon className='size-5 shrink-0 text-orange-500' />

                                    <span className="flex-1 text-gray-700">reg.rentagreement@legalwing.in</span>
                                </a>
                            </li>

                            <li>
                                <Link
                                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    href="#"
                                >
                                    <PhoneIcon className='size-5 shrink-0 text-orange-500' />

                                    <span className="flex-1 text-gray-700">+91 9067801412</span>
                                </Link>
                            </li>

                            <li
                                className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            >
                                <MapPinIcon className='size-5 shrink-0 text-orange-500' />

                                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                    Office No. 6, Kadekar Plaza, D. P. Road, Kothrud, Pune 411038
                                </address>
                            </li>
                        </ul>
                    </div>



                    <div>
                        <p className="font-medium text-gray-900">Company</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li><Link href="/about" className="text-gray-700 transition hover:opacity-75 hover:underline">ABOUT US</Link></li>
                            <li><Link href="/services" className="text-gray-700 transition hover:opacity-75 hover:underline">SERVICES</Link></li>
                            <li><Link href="/process" className="text-gray-700 transition hover:opacity-75 hover:underline">PROCESS</Link></li>
                            <li><Link href="/contact" className="text-gray-700 transition hover:opacity-75 hover:underline">CONTACT US</Link></li>

                           
                        </ul>
                    </div>


                </div>
            </div>

            <p className="text-xs text-gray-500">&copy; 2024. LegalWing. All rights reserved.</p>
        </div>
    </footer>
}
export default Footer;
