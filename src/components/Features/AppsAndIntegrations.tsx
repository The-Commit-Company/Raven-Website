import React, { FC } from 'react';
import Image from 'next/image';
import ravenIntegrations from '../../../public/assets/RavenIntegrations.png';

const AppsAndIntegrations: FC = () => {
    return (
        <div>
            <div className='flex flex-col gap-4 px-8'>
                <h4 className='text-center text-2xl md:text-5xl font-bold font-calsans'>Integrates with any Frappe app</h4>
                <p className='text-center text-lg md:text-xl text-gray-500'>Raven offers powerful and customizable integrations with apps in the Frappe ecosystem</p>
            </div>
            <div className="w-full flex justify-center md:px-12 relative">
                <div className="absolute inset-0 z-0 bg-grid-pattern bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none"></div>
                <Image
                    src={ravenIntegrations}
                    alt="Raven Integration Graphic"
                    objectFit="cover"
                    className="relative z-10"
                />
            </div>
        </div>
    )
}

export default AppsAndIntegrations;