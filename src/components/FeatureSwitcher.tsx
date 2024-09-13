'use client';
import React, { FC, ReactNode, useState } from 'react';
import { FaMagic } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type ImageOption = {
    label: string;
    src: string;
    icon: React.ReactNode;
    description: string;
};

const options: ImageOption[] = [
    {
        label: "Lorem",
        src: "/images/image1.png", // Replace with actual image paths
        icon: <FaMagic />,
        description: "consectetur adipiscing elit. Nam at erat felis. Ut sollicitudin lacus dolor",
    },
    {
        label: "Ipsum",
        src: "/images/image2.png",
        icon: <FaMagic />,
        description: "vel eleifend sem efficitur ac. Aenean tincidunt mattis sem quis dapibus",
    },
    {
        label: "Dolor",
        src: "/images/image3.png",
        icon: <FaMagic />,
        description: "Mauris lorem velit, venenatis finibus risus in, elementum interdum risus",
    },
    {
        label: "Amet",
        src: "/images/image4.png",
        icon: <FaMagic />,
        description: "Maecenas dignissim eleifend turpis, nec bibendum augue. Pellentesque non rutrum felis",
    }
];

// Main Component
const FeatureSwitcher: FC = () => {
    const [selectedOption, setSelectedOption] = useState<ImageOption>(options[0]);

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-8">
            {/* Main Box */}
            <div className="relative w-full max-w-7xl mx-auto p-8 bg-white rounded-xl border-4 border-gray-50 outline outline-gray-100">

                {/* Mobile Slider (visible only on small screens) */}
                <div className="block md:hidden">  {/* Hidden on medium and above */}
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="swiper-container"
                    >
                        {options.map((option) => (
                            <SwiperSlide key={option.label}>
                                <FeatureSlide
                                    icon={option.icon}
                                    title={option.label}
                                    description={option.description}
                                    imageSrc={option.src}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop/Web: Only show the selected image */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-4 gap-8 mb-10 text-left">
                        {options.map((option) => (
                            <div key={option.label} onClick={() => setSelectedOption(option)} className="cursor-pointer">
                                <FeatureButton
                                    icon={option.icon}
                                    title={option.label}
                                    description={option.description}
                                    isSelected={selectedOption.label === option.label} // Pass selected state
                                />
                            </div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full h-[400px] mt-6 rounded-lg overflow-hidden">
                        <img
                            src={selectedOption.src}
                            alt={selectedOption.label}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSwitcher;

// Individual Slide Component for Mobile
interface FeatureSlideProps {
    icon: ReactNode;
    title: string;
    description: string;
    imageSrc: string;
}

const FeatureSlide: FC<FeatureSlideProps> = ({ icon, title, description, imageSrc }) => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Feature Button */}
            <div className="text-left cursor-pointer">
                <div className="flex items-center justify-start text-gray-600 text-xl mb-2">
                    {icon}
                    <h3 className="font-semibold text-gray-900 ml-2">{title}</h3>
                </div>
                <p className="text-gray-500 text-sm">
                    {description}
                </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full h-[400px] mt-6 rounded-lg overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
        </div>
    );
};

// Feature Button for Web
interface FeatureButtonProps {
    icon: ReactNode; // Icon component
    title: string;   // Button title
    description: string; // Button description
    isSelected: boolean; // If this button is selected
}

const FeatureButton: FC<FeatureButtonProps> = ({ icon, title, description, isSelected }) => {
    return (
        <div className={`text-left cursor-pointer ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
            <div className={`flex items-center justify-start text-xl mb-2 ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                {icon}
                <h3 className={`ml-2 ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>{title}</h3>
            </div>
            <p className={`text-sm ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                {description}
            </p>
        </div>
    );
};
