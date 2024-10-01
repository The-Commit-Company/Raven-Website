'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ravenIntegrations from '../../../../public/assets/RavenIntegrations.png';

const ImageSwitcher: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(0);

    const options = [
        { title: 'Extract data from files and images', imageSrc: ravenIntegrations },
        { title: 'Chain multiple complex tasks', imageSrc: ravenIntegrations },
        { title: 'Gather info from multiple sources quickly', imageSrc: ravenIntegrations },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between">
            {/* Text Section */}
            <div className="md:w-1/3 pt-20">
                <h2 className="text-2xl font-semibold mb-10 w-60">
                    Build your own bots without writing a single line of code
                </h2>
                <ul className="space-y-4">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer flex items-center text-md font-medium transition-all duration-300 ${selectedOption === index
                                ? 'text-gray-800 font-semibold'
                                : 'text-gray-400'
                                }`}
                            onClick={() => setSelectedOption(index)}
                        >
                            <div
                                className={`h-6 w-1 mr-4 rounded-full transition-all duration-300 ${selectedOption === index
                                    ? 'bg-blue-400'
                                    : 'bg-transparent'
                                    }`}
                            ></div>
                            {option.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-2/3 flex justify-center">
                <div className="relative p-1 bg-gradient-to-br from-gray-50 to-transparent rounded-xl">
                    {/* Image Container */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl">
                        <Image
                            src={options[selectedOption].imageSrc}
                            alt={options[selectedOption].title}
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSwitcher;
