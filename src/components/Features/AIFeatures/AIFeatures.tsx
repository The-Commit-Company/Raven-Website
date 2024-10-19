import React from 'react';
import TextSectionsGrid from './TextSectionsGrid';
import { HiSparkles } from 'react-icons/hi';
import VideoSwitcher from './VideoSwitcher';

const AIFeatures: React.FC = () => {
    return (
        <div className="flex flex-col justify-center md:pb-36 pb-16 max-w-6xl mx-auto px-8 md:px-0">
            <div className='flex flex-col gap-2 mb-12'>
                <div className='flex items-center gap-2 font-semibold text-gray-800 text-md'><HiSparkles /><p>Raven AI</p></div>
                <h2 className='text-4xl sm:text-4xl md:text-5xl font-semibold font-calsans'>
                    Add AI to your workflow in minutes
                </h2>
            </div>
            <div className="flex flex-col gap-10 md:gap-16">
                <VideoSwitcher />
                <TextSectionsGrid />
            </div>
        </div>
    );
};

export default AIFeatures;
