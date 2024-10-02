import React, { FC } from 'react';
import Image from 'next/image';
import ravenIntegrations from '../../../../public/assets/RavenIntegrations.png';
import { LuBox } from 'react-icons/lu';

const AppsAndIntegrations: FC = () => {
    return (
        <div className='flex flex-col justify-center md:pb-36 pb-16 max-w-6xl mx-auto px-8 md:px-0'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2 font-semibold text-gray-800 text-md'><LuBox /><p>Apps & Integrations</p></div>
                <h4 className='text-4xl md:text-6xl font-bold font-calsans'>
                    Integrate with any Frappe app
                </h4>
            </div>
            <div className="w-full flex justify-center relative pt-12">
                <div className="absolute inset-0 z-0 bg-grid-pattern bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none"></div>
                <Image
                    src={ravenIntegrations}
                    alt="Raven Integration Graphic"
                    objectFit="cover"
                    className="relative"
                />
            </div>
        </div>
    )
}

export default AppsAndIntegrations;