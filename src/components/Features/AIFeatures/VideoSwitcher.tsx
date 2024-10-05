'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';

const VideoSwitcher: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoSrc, setVideoSrc] = useState('');

    // Memoize the options array to avoid recreating it on every render
    const options = useMemo(() => [
        { title: 'Extract data from files and images', videoSrc: 'assets/FileReadingAI.mp4', poster: 'assets/FileReadingAIPreview.png' },
        { title: 'Chain multiple complex tasks', videoSrc: 'assets/DataImporter.mp4', poster: 'assets/DataImporterPreview.png' },
        { title: 'Gather info from multiple sources quickly', videoSrc: 'assets/MultipleSourcesAI.mp4', poster: 'assets/MultipleSourcesAIPreview.png' },
    ], []);

    useEffect(() => {
        const currentVideo = videoRef.current;
        if (!currentVideo) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVideoSrc(options[selectedOption].videoSrc); // Load video src when in view
                        currentVideo.play();
                    } else {
                        currentVideo.pause();
                        setVideoSrc(''); // Unset src to stop loading video when out of view
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(currentVideo);

        return () => {
            observer.unobserve(currentVideo); // Clean up the observer
        };
    }, [selectedOption, options]); // Now options is a stable reference due to useMemo

    return (
        <div className="flex flex-col md:flex-row justify-between">
            {/* Text Section */}
            <div className="w-full md:w-1/3 md:pt-20">
                <h2 className="text-xl font-semibold mb-10 md:w-60">
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
                            aria-current={selectedOption === index ? 'true' : 'false'}
                            role="option"
                            aria-selected={selectedOption === index}
                        >
                            <div
                                className={`h-6 w-1 mr-4 rounded-full transition-all duration-300 ${selectedOption === index
                                    ? 'bg-blue-400'
                                    : 'bg-transparent'
                                    }`}
                                aria-hidden="true"
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
                            ref={videoRef}
                            poster={options[selectedOption].poster}
                            src={videoSrc} // Lazy load the video src
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-auto"
                            aria-label={options[selectedOption].title}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSwitcher;
