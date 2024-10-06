import React from 'react';
import { FaGithub, FaUsers } from 'react-icons/fa';

const OpenSourceInfo: React.FC = () => {

    return (
        <div className="lg:w-1/2 space-y-6 px-8 md:px-0">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 font-calsans">100% Open Source</h2>
            <p className="text-md md:text-lg text-gray-500 text-left">
                We believe in complete transparency. You can explore the code,{' '}
                <a href="https://github.com/The-Commit-Company/raven/issues" className="text-blue-400 underline hover:text-blue-500 transition-colors">request a feature</a> or contribute your own. Since it&apos;s fully open-source, there&apos;s no vendor lock-in — giving you full control over the software.
            </p>

            <div className="flex space-x-4">
                <a href="https://github.com/The-Commit-Company/raven"
                    className="flex justify-center items-center px-3 md:px-6 py-3 md:text-base lg:text-base text-sm bg-black text-white rounded-lg transition-all duration-200 hover:bg-gray-800">
                    <FaGithub size={18} className="mr-2 hidden sm:block" />
                    View Repository
                </a>
                <a href="https://community.ravenapp.cloud"
                    className="flex justify-center items-center px-3 md:px-6 py-3 md:text-base lg:text-base text-sm border border-gray-300 text-gray-800 rounded-lg transition-all duration-200 hover:border-gray-800">
                    <FaUsers size={18} className="mr-2 hidden sm:block" />
                    Join Community
                </a>
            </div>
        </div>
    );
};

export default OpenSourceInfo;
