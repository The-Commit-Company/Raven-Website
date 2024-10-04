'use client';
import React, { useState } from 'react';

const VideoSwitcher: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState(0);

    const options = [
        { title: 'Extract data from files and images', videoSrc: 'assets/FileReadingAI.mp4', poster: 'assets/FileReadingAIPreview.png' },
        { title: 'Chain multiple complex tasks', videoSrc: 'assets/DataImporter.mp4', poster: 'assets/DataImporterPreview.png' },
        { title: 'Gather info from multiple sources quickly', videoSrc: 'assets/MultipleSourcesAI.mp4', poster: 'assets/MultipleSourcesAIPreview.png' },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between">
            {/* Text Section */}
            <div className="w-full md:w-1/3 md:pt-20">
                <h2 className="text-2xl font-semibold mb-10 md:w-60">
                    Build your own bots without writing a single line of code
                </h2>
                <ul className="space-y-4 mb-10 md:mb-0">
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

            {/* Video Section */}
            <div className="md:w-2/3 flex justify-center">
                <div className="relative p-1 bg-gradient-to-br from-gray-200 to-transparent rounded-md">
                    {/* Video Container */}
                    <div className="rounded-md overflow-hidden">
                        <video
                            poster={options[selectedOption].poster}
                            src={options[selectedOption].videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSwitcher;
