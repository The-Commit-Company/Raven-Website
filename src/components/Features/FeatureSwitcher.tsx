'use client';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BiMessageDetail, BiSearchAlt } from 'react-icons/bi';
import { CgPoll } from 'react-icons/cg';
import { FiCalendar } from 'react-icons/fi';

type ImageOption = {
    label: string;
    src: string;
    icon: React.ReactNode;
    description: string;
};

const options: ImageOption[] = [
    {
        label: "Threads",
        src: "/assets/Threads.png",
        icon: <BiMessageDetail />,
        description: "Threads help keep your conversations organized, making discussions easier to follow and manage",
    },
    {
        label: "Search",
        src: "/assets/Search.png",
        icon: <BiSearchAlt />,
        description: "Press ⌘K (Ctrl + K on Windows) to search channels, people, messages and files",
    },
    {
        label: "Polls",
        src: "/assets/Polls.png",
        icon: <CgPoll />,
        description: "Polls make it easy to gather feedback and opinions, helping your team make decisions",
    },
    {
        label: "Google Meet Integration",
        src: "/assets/GMeetIntegration.png",
        icon: <FiCalendar />,
        description: "You can quickly schedule and join meetings right from any channel/ DMs for easy collaboration",
    }
];

// Main Component
const FeatureSwitcher: FC = () => {
    const [selectedOption, setSelectedOption] = useState<ImageOption>(options[0]);

    // Set up auto-switching logic using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedOption(prev => {
                const currentIndex = options.findIndex(opt => opt.label === prev.label);
                const nextIndex = (currentIndex + 1) % options.length; // Loop back to 0 after the last one
                return options[nextIndex];
            });
        }, 10000); // Switch every 10 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
                clickable: true,
                el: '.swiper-pagination', // Use a custom pagination element
            }}
            className="swiper-container w-full"
        >
            {options.map((option) => (
                <SwiperSlide key={option.label}>
                    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-8">
                        {/* Main Box */}
                        <div className="relative w-full max-w-6xl mx-auto md:p-8 p-4 bg-white rounded-xl border-4 border-gray-50 outline outline-gray-100">
                            {/* Desktop/Web: Only show the selected image */}
                            <div className="hidden md:block">
                                <div className="grid grid-cols-4 gap-8 mb-10 text-left">
                                    {options.map((opt) => (
                                        <div key={opt.label} onClick={() => setSelectedOption(opt)} className="cursor-pointer">
                                            <FeatureButton
                                                icon={opt.icon}
                                                title={opt.label}
                                                description={opt.description}
                                                isSelected={selectedOption.label === opt.label} // Pass selected state
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Image Section */}
                                <div className="relative h-full rounded-lg border border-gray-100  overflow-hidden">
                                    <img
                                        src={selectedOption.src}
                                        alt={selectedOption.label}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Mobile Slider (visible only on small screens) */}
                            <div className="block md:hidden">
                                <FeatureSlide
                                    icon={option.icon}
                                    title={option.label}
                                    description={option.description}
                                    imageSrc={option.src}
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            {/* Pagination Dots: Only visible on mobile */}
            <div className="swiper-pagination md:hidden"></div>
        </Swiper>
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
        <div className="flex flex-col items-center text-center my-2">
            {/* Feature Button */}
            <div className="text-left cursor-pointer">
                <div className="flex items-center justify-start text-gray-600 text-xl mb-3">
                    {icon}
                    <h3 className="font-semibold text-gray-900 ml-2">{title}</h3>
                </div>
                <p className="text-gray-500 text-base">
                    {description}
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full mt-6 rounded-md border border-gray-100 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover w-full h-full"
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
            <div className={`flex items-center justify-start text-lg mb-2 ${isSelected ? 'font-semibold' : 'font-medium'}`}>
                {icon}
                <h3 className={`ml-2 ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>{title}</h3>
            </div>
            <p className={`text-[14px] ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                {description}
            </p>
        </div>
    );
};
