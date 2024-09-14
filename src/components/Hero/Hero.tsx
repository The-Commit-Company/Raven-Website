'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
    return (
        <section className="flex flex-col justify-center items-center py-20 px-4 h-[calc(100vh-20rem)] text-center">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:w-1/3 lg:w-1/3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur.
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:w-1/2 lg:w-1/2">
                Nam at erat felis. Ut sollicitudin lacus dolor, vel eleifend sem efficitur ac.
                Aenean tincidunt mattis sem quis dapibus. Mauris lorem velit, venenatis finibus risus in, elementum interdum risus.
            </p>
            <div className="space-x-4">
                <button className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-black text-white rounded-lg transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-lg">
                    Get started
                </button>
                <button className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-gray-300 text-black rounded-lg transition-all duration-200 hover:border-gray-800 hover:shadow-md">
                    Request a demo
                </button>
            </div>
        </section>
    );
};

export default Hero;
