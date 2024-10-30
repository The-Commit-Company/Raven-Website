import React, { FC } from 'react';
import { LuBox } from 'react-icons/lu';
import IntegrationsBento from './IntegrationsBento';

const AppsAndIntegrations: FC = () => {
    return (
        <div className='flex flex-col gap-12 justify-center md:pb-36 pb-16 max-w-6xl mx-auto px-8 md:px-0'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2 font-semibold text-gray-800 text-md'><LuBox /><p>Apps & Integrations</p></div>
                <h2 className='text-4xl sm:text-4xl md:text-5xl font-calsans'>
                    Integrate with any Frappe app
                </h2>
            </div>
            <IntegrationsBento />
        </div>
    )
}

export default AppsAndIntegrations;