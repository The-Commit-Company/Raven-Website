'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-16 py-24 px-4 h-[calc(100vh-20rem)] text-center">
            <div className="mb-4 px-4 py-1 bg-gradient-to-r from-gray-100 to-white border border-gray-200 rounded-full shadow-base text-gray-600 text-[12px] font-medium tracking-wide">
                Introducing Raven AI ✨
            </div>
            <motion.h1
                className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl mb-4 md:w-1/3 lg:w-1/3 font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                More than just another chat app
            </motion.h1>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-8 md:w-1/2 lg:w-1/3">
                Enterprise-first messaging platform that seamlessly integrates with your ERP
            </p>
            <div className="space-x-4">
                <button className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-black text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-lg">
                    Get started
                </button>
                <button className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-gray-300 text-black rounded-lg transition-all duration-200 hover:border-gray-800 hover:shadow-md">
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
