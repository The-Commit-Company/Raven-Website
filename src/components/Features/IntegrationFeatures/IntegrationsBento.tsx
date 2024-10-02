import React from 'react';
import Image from 'next/image';
import hrIntegration from '../../../../public/assets/IntegrationExample.png';
import ravenIntegrations from '../../../../public/assets/RavenIntegrations.png';

const IntegrationsBento: React.FC = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 gap-4 sm:gap-4 md:gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                    <RavenIntegrations />
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">
                    <HRIntegrationExample />
                </div>
                {/* Below divs with a 2/3 and 1/3 height split */}
                <div className="flex flex-col sm:gap-4 md:gap-6">
                    <div className="h-2/3 rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">

                    </div>
                    <div className="h-1/3 rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">

                    </div>
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 md:col-span-2">
                    <RavenInDesk />
                </div>
            </div>
        </div>
    );
};

export default IntegrationsBento;

const RavenIntegrations: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl">
            {/* Dotted Background */}
            <div className="absolute inset-0 bg-grid-pattern"></div>
            <div className="relative p-4 md:p-8">
                <Image
                    src={ravenIntegrations}
                    alt="Raven Integrations"
                    objectFit="cover"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

const HRIntegrationExample: React.FC = () => {
    return (
        <div className='flex flex-col gap-4 p-6'>
            <div>
                <h2 className="text-lg sm:text-xl md:text-xl text-gray-800 font-semibold mb-2">Trigger notifications</h2>
                <p className="text-gray-500 text-[14px] sm:text-base">Bots can send messages on document events based on conditions</p>
            </div>
            <div className="relative overflow-hidden rounded-xl">
                {/* Dotted Background */}
                <div className="absolute inset-0 dot-pattern"></div>
                <div className="relative p-4">
                    <Image
                        src={hrIntegration}
                        alt="HR Integration Example"
                        objectFit="cover"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

const RavenInDesk: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl flex items-center justify-center">
            {/* Dotted Background */}
            <div className="absolute inset-0"></div>
            <div className='flex flex-col gap-4 p-6'>
                {/* <h2 className="text-xl md:text-2xl font-semibold mb-4">Use raven directly from your ERPNext desk interface</h2> */}
                <div>
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-800 font-semibold mb-2">Ravens also deliver to your <em>desk</em>.</h2>
                    <p className="text-gray-500 text-[14px] sm:text-base">The desk interface has a quick chat box for moments when you need to see your messages without losing context.</p>
                </div>
                <div className="relative">
                    <video
                        src={'assets/RavenInDesk.mp4'}
                        className="rounded-xl border border-gray-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
            </div>
        </div>
    );
};
