import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { CgToolbox } from 'react-icons/cg';
import { LuFunctionSquare } from 'react-icons/lu';
import { RiExchange2Line } from 'react-icons/ri';

interface TextSectionProps {
    icon: React.ReactNode;
    heading: string;
    subtext: string;
}

const TextSection: React.FC<TextSectionProps> = ({ icon, heading, subtext }) => {
    return (
        <div className="flex flex-col">
            <div className="flex md:items-center gap-3 mb-2 flex-col md:flex-row">
                <div className="text-lg md:text-md">{icon}</div>
                <h3 className="font-semibold text-sm md:text-base">{heading}</h3>
            </div>
            <p className="text-gray-500 text-sm md:text-base">{subtext}</p>
        </div>
    );
};

const TextSectionsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-14 border-t border-gray-100">
            <TextSection
                icon={<BiMessageDetail />}
                heading="Context Aware Threads"
                subtext="Bots maintain context of complex multistep tasks via threads."
            />
            <TextSection
                icon={<RiExchange2Line />}
                heading="Dynamic Instructions"
                subtext="Embed user specific context in your instructions using Jinja."
            />
            <TextSection
                icon={<LuFunctionSquare />}
                heading="Functions"
                subtext="Call functions within ERPNext to perform tasks like fetching/ creating documents."
            />
            <TextSection
                icon={<CgToolbox />}
                heading="Tools"
                subtext="AI can read and scan files with file search, vision and code interpreter."
            />
        </div>
    );
};

export default TextSectionsGrid;
