import React from 'react';
import Image from 'next/image';
import hrIntegration from '../../../../public/assets/IntegrationExample.png';

const IntegrationsBento: React.FC = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 p-4 md:col-span-2">
                    {/* Card 1 */}
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">
                    <HRIntegrationExample />
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 p-4">
                    {/* Card 3 */}
                </div>
            </div>
        </div>
    );
};

export default IntegrationsBento;

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
