'use client';

import { FC, useMemo } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import VideoWithPlayButton from './VideoWithPlayButton';

const Hero: FC = () => {
    const chevronIcon = useMemo(() => <FiChevronRight color="gray" />, []);

    return (
        <section className="flex flex-col justify-center items-center py-24 px-4 mt-20 text-center">
            <div className="flex justify-center items-center gap-2 mb-4 pl-4 pr-2 py-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 rounded-full shadow-base text-gray-600 text-[12px] font-medium tracking-wide hover:cursor-pointer hover:outline-double hover:outline-blue-100">
                Introducing Raven AI ✨ {chevronIcon}
            </div>
            <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[81px] mb-8 md:w-1/3 lg:w-2/5 font-extrabold font-calsans">
                Chat + AI for your business
            </h1>
            <p className="text-sm font-medium sm:text-lg md:text-lg text-gray-600 mb-10 md:w-1/2 lg:w-2/6">
                Enterprise-first messaging platform that seamlessly integrates with your ERP
            </p>

            <div className="md:h-[50rem] w-full relative flex items-center justify-center">
                {/* Radial Gradient Fade Effect */}
                <div className="absolute inset-0 pointer-events-none bg-grid-pattern-dark bg-fade-out"></div>

                <div className="flex flex-col">
                    {/* CTA */}
                    <div className="space-x-4 z-10">
                        <a
                            href="https://frappecloud.com/marketplace/apps/raven"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 md:py-3 text-base bg-black text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-lg"
                        >
                            Get started
                        </a>
                        <a
                            href="https://cal.com/nikkothari22/send-a-raven"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 md:py-3 text-base bg-white border border-gray-300 text-gray-800 rounded-lg transition-all duration-200 hover:border-gray-800 hover:shadow-md"
                        >
                            Request a demo
                        </a>
                    </div>
                    <p className="text-[14px] text-gray-600 mt-4 md:mt-6">
                        200+ active sites on Frappe Cloud 🚀
                    </p>

                    {/* Video */}
                    <div className="relative my-10 md:my-12 px-3 md:px-0">
                        <VideoWithPlayButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
