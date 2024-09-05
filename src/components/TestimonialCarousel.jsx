// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TestimonialCarousal() {

    const testimonials = [
        {
            name: "Jane D",
            profileImage: "https://pagedone.io/asset/uploads/1696229969.png",
            stars: 5,
            comment: "Pagedone is simply the best tool of investment in the market right now.",
        },
        {
            name: "John S",
            profileImage: "https://pagedone.io/asset/uploads/1696229990.png",
            stars: 4,
            comment: "A fantastic tool that has streamlined our workflow significantly.",
        },
        {
            name: "Emily R",
            profileImage: "https://pagedone.io/asset/uploads/1696230011.png",
            stars: 5,
            comment: "An essential part of our daily operations now. Highly recommended!",
        },
        {
            name: "Jane D",
            profileImage: "https://pagedone.io/asset/uploads/1696229969.png",
            stars: 5,
            comment: "Pagedone is simply the best tool of investment in the market right now.",
        },
        {
            name: "John S",
            profileImage: "https://pagedone.io/asset/uploads/1696229990.png",
            stars: 4,
            comment: "A fantastic tool that has streamlined our workflow significantly.",
        },
        {
            name: "Emily R",
            profileImage: "https://pagedone.io/asset/uploads/1696230011.png",
            stars: 5,
            comment: "An essential part of our daily operations now. Highly recommended!",
        },
        // Add more testimonials as needed
    ];

    return (
        <div className='flex flex-col gap-5 w-full'>  
            <p className="font-extralight text-[#425066] text-5xl text-center">Success Stories</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center  text-red-500">
                Testimonials
            </h2>

            
            <div className="mx-5 md:mx-56 lg:mx-64 my-10">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} 
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide className="group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500  hover:border-indigo-600" key={index}>
                            <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                                {testimonial.comment}
                            </p>
                            <div className="flex items-center gap-5">
                                <img className="rounded-full w-12 h-12" src={testimonial.profileImage} alt={testimonial.name} />
                                <div className="grid gap-1">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600">
                                        {testimonial.name}
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
