import React from 'react';
import { FC } from 'react';

const Banner: FC = () => {
    return (
        <div className="w-full bg-backgroundDark py-16 px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-2xl mb-6 md:mb-0 text-center md:text-left">
                <h2 className="font-bold font-calsans mb-6">
                    <span className="text-gray-400 text-4xl md:text-5xl">It&apos;s time</span>
                    <br />
                    <span className="text-white text-4xl md:text-5xl">Send a raven.</span>
                </h2>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <button className="px-6 py-2 bg-white text-gray-600 font-semibold rounded hover:bg-gray-200 transition-colors duration-200">
                    Try for free
                </button>
                <a
                    href={'https://cal.com/nikkothari22/send-a-raven'} target='_blank' rel='noreferrer'
                    className="px-6 py-2 border border-gray-500 text-gray-200 font-semibold rounded hover:bg-buttonDarkGray transition-colors duration-200">
                    Request a demo
                </a>
            </div>
        </div>
    );
};

export default Banner;
