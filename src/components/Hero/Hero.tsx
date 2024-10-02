'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import heroImage from '../../../public/assets/Hero.png';

const Hero: FC = () => {
    return (
        <section className="flex flex-col justify-center items-center py-24 px-4 mt-20 text-center">
            <div className="flex justify-center items-center gap-2 mb-4 pl-4 pr-2 py-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 rounded-full shadow-base text-gray-600 text-[12px] font-medium tracking-wide hover:cursor-pointer hover:outline-double hover:outline-blue-100">
                Introducing Raven AI ✨ <FiChevronRight color='gray' />
            </div>
            <motion.h1
                className="text-6xl sm:text-5xl md:text-7xl lg:text-[81px] mb-8 md:w-1/3 lg:w-2/5 font-extrabold font-calsans"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                Chat + AI for your business
            </motion.h1>
            <p className="text-sm font-medium sm:text-lg md:text-lg text-gray-600 mb-10 md:mb-12 md:w-1/2 lg:w-2/6">
                Enterprise-first messaging platform that seamlessly integrates with your ERP
            </p>

            <div className="md:h-[50rem] w-full relative flex items-center justify-center">
                {/* Radial Gradient Fade Effect */}
                <div className="absolute inset-0 pointer-events-none bg-grid-pattern-dark bg-fade-out"></div>

                <div className='flex flex-col'>
                    {/* CTA */}
                    <div className="space-x-4 z-10">
                        <button className="px-4 py-2 text-base bg-black text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-lg">
                            Get started
                        </button>
                        <button className="px-4 py-2 text-base bg-white border border-gray-300 text-gray-800 rounded-lg transition-all duration-200 hover:border-gray-800 hover:shadow-md">
                            Request a demo
                        </button>
                    </div>
                    <p className="text-[14px] text-gray-600 mt-4">
                        200+ Active sites on Frappe Cloud 🚀
                    </p>

                    {/* Image */}
                    <div className="relative shadow-sm rounded-md my-10 md:my-12 px-3 md:px-0">
                        <Image
                            src={heroImage}
                            className='border border-gray-100 rounded-md'
                            alt="Raven app image"
                            width={1152}
                            height={700}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
