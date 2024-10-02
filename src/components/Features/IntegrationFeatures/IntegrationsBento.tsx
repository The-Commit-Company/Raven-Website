import React from 'react';
import Image from 'next/image';
import hrIntegration from '../../../../public/assets/IntegrationExample.png';
import ravenIntegrations from '../../../../public/assets/RavenIntegrations.png';

const IntegrationsBento: React.FC = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 gap-4 sm:gap-4 md:gap-6 md:grid-cols-2">
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 md:col-span-2">
                    <RavenIntegrations />
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">
                    <HRIntegrationExample />
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">

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
            <div className="relative p-8">
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
    );
};

const RavenInDesk: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl flex items-center justify-center">
            {/* Dotted Background */}
            <div className="absolute inset-0 dot-pattern"></div>
            <div className='flex flex-col p-4'>
                <h2 className="text-2xl font-semibold mb-4">Use raven directly from your ERPNext desk interface</h2>
                <div className="relative">
                    <video
                        src={'assets/RavenInDesk.mp4'}
                        className="rounded-xl border border-gray-100"
                        width={1000}
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
