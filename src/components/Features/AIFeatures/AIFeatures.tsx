import React from 'react';
import TextSectionsGrid from './TextSectionsGrid';
import ImageSwitcher from './ImageSwitcher';
import { IoSparkles } from 'react-icons/io5';

const AIFeatures: React.FC = () => {
    return (
        <div className="flex flex-col justify-center md:pb-36 pb-16 max-w-6xl mx-auto">
            <div className='flex flex-col gap-2 mb-12'>
                <div className='flex items-center gap-2 font-semibold text-gray-800 text-md'><IoSparkles /><p>Raven AI</p></div>
                <h4 className='text-2xl md:text-6xl font-bold font-calsans'>
                    Add AI to your workflow in minutes
                </h4>
            </div>
            <div className="flex flex-col gap-16">
                <ImageSwitcher />
                <TextSectionsGrid />
            </div>
        </div>
    );
};

export default AIFeatures;
