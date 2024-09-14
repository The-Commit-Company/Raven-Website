import React from 'react'
import { FC } from 'react';

const Banner: FC = () => {
    return (
        <div className="w-full bg-gray-800 py-16 px-8 flex justify-between items-center">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-6">
                    <span className="text-gray-400">It's time</span>
                    <br />
                    <span className="text-white text-4xl">Send a raven</span>
                </h2>
                <div className="space-x-4">
                    <button className="px-6 py-2 bg-white text-gray-600 font-semibold rounded hover:bg-gray-200 transition-colors duration-200">
                        Try for free
                    </button>
                    <button className="px-6 py-2 border border-gray-500 text-gray-200 font-semibold rounded hover:bg-gray-900 transition-colors duration-200">
                        Request a demo
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <svg
                    viewBox="0 0 200 200"
                    className="w-64 h-64 text-white/20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M45,-52.9C57.5,-40.8,66.5,-25.4,69.6,-8.5C72.7,8.4,69.9,26.8,60.1,40.9C50.3,55,33.5,64.8,15.3,68.7C-2.9,72.6,-22.6,70.5,-39.3,61.9C-56,53.3,-69.7,38.1,-76.4,19.7C-83.1,1.3,-82.8,-20.3,-73.3,-36.9C-63.8,-53.5,-45.1,-65,-27.4,-68.8C-9.7,-72.5,7,-68.5,22.4,-62.2C37.8,-55.9,51.8,-47.3,45,-52.9Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Banner;