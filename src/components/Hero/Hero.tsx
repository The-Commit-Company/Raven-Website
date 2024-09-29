'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const Hero: FC = () => {
    return (
        <section className="flex flex-col justify-center items-center py-24 px-4 mt-20 md:mt-28 lg:mt-32 text-center">
            <div className="flex justify-center items-center gap-2 mb-4 pl-4 pr-2 py-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 rounded-full shadow-base text-gray-600 text-[12px] font-medium tracking-wide hover:cursor-pointer hover:outline-double hover:outline-blue-100">
                Introducing Raven AI ✨ <FiChevronRight color='gray' />
            </div>
            <motion.h1
                className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:w-1/3 lg:w-1/2 font-extrabold font-calsans"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                Chat + AI for your business
            </motion.h1>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-8 md:w-1/2 lg:w-1/3">
                Enterprise-first messaging platform that seamlessly integrates with your ERP
            </p>
            <div className="space-x-4">
                <button className="px-4 py-2 text-base bg-black text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-lg">
                    Get started
                </button>
                <button className="px-4 py-2 text-base border border-gray-300 text-black rounded-lg transition-all duration-200 hover:border-gray-800 hover:shadow-md">
                    Request a demo
                </button>
            </div>
            <p className="text-[14px] text-gray-500 mt-4">
                200+ Active sites on Frappe Cloud
            </p>
        </section>
    );
};

export default Hero;
