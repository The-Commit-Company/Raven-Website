import React from 'react';
import Image, { StaticImageData } from 'next/image';
import hrIntegration from '../../../../public/assets/IntegrationExample.png';
import ravenIntegrations from '../../../../public/assets/RavenIntegrations.png';
import workflowActions from '../../../../public/assets/WorkflowActions.png';
import frappeHRLeave from '../../../../public/assets/FrappeHRLeave.png';

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
                <div className="flex flex-col gap-4 sm:gap-4 md:gap-6">
                    <div className="h-3/5 md:h-1/2 rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">
                        <ContentCard
                            title="Share any document link from your ERP"
                            subtitle="Documents from your ERP can be shared with customizable previews and users can run workflows or print them directly from raven"
                            imageSrc={workflowActions}
                        />
                    </div>
                    <div className="h-2/5 md:h-1/2 rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100">
                        <ContentCard
                            title="Build custom integrations"
                            subtitle='Heres one with Frappe HR'
                            imageSrc={frappeHRLeave}
                        />
                    </div>
                </div>
                <div className="rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 md:col-span-2">
                    <ContentCard
                        title="Ravens also deliver to your desk."
                        subtitle="The desk interface has a quick chat box for moments when you need to see your messages without losing context."
                        videoSrc="assets/RavenInDesk.mp4"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntegrationsBento;

const RavenIntegrations: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern"></div>
            <div className="relative p-4 md:p-6">
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
        <div className='flex flex-col items-center justify-center gap-4 p-4 md:p-6'>
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
                        width={440}
                    />
                </div>
            </div>
        </div>
    );
};

interface ContentCardProps {
    title: string;
    subtitle: string;
    videoSrc?: string;
    imageSrc?: StaticImageData;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, videoSrc, imageSrc }) => {
    return (
        <div className="relative overflow-hidden rounded-xl flex items-center justify-center">
            <div className='flex flex-col gap-6 p-4 md:p-6'>
                <div>
                    <h2 className="text-lg sm:text-xl md:text-xl text-gray-800 font-semibold mb-2">{title}</h2>
                    <p className="text-gray-500 text-[14px] sm:text-base">{subtitle}</p>
                </div>
                <div className="relative">
                    {videoSrc && (
                        <video
                            src={videoSrc}
                            className="rounded-xl border border-gray-100"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    )}
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={title}
                            objectFit="cover"
                            className="rounded-xl border border-gray-100"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};