import React from 'react';

const AnimatedCard = ({ title, text, icon, currentIndex }) => {
    return (
        <div
            className="service-card w-[300px] shadow-2xl shadow-gray-500 border-1 border-gray-300 cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-lg "
        >
            {/* Icon */}
            <div className="text-5xl h-12 w-12 group-hover:stroke-gray-400 stroke-gray-800">
                {icon}
            </div>

            {/* Title */}
            <p className="font-bold text-2xl group-hover:text-white text-black/80">
                {title}
            </p>

            {/* Text */}
            <p className="text-gray-400 text-sm">
                {text}
            </p>

            {/* Current Index */}
            <p
                style={{
                    WebkitTextStroke: '1px gray',
                    WebkitTextFillColor: 'transparent'
                }}
                className="text-5xl font-bold self-end"
            >
                {currentIndex}
            </p>
        </div>
    );
};

export default AnimatedCard;
