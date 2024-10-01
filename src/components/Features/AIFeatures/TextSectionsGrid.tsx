import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import { GiDiamonds } from 'react-icons/gi';
import { LuBox } from 'react-icons/lu';
import { MdRocket } from 'react-icons/md';

interface TextSectionProps {
    icon: React.ReactNode;
    heading: string;
    subtext: string;
}

const TextSection: React.FC<TextSectionProps> = ({ icon, heading, subtext }) => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-2">
                <div className="text-md">{icon}</div>
                <h3 className="text-sm font-semibold">{heading}</h3>
            </div>
            <p className="text-sm text-gray-500">{subtext}</p>
        </div>
    );
};

const TextSectionsGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14 border-t border-gray-100">
            <TextSection
                icon={<MdRocket />}
                heading="Initiatives"
                subtext="Coordinate strategic product efforts."
            />
            <TextSection
                icon={<LuBox />}
                heading="Cross-team projects"
                subtext="Collaborate across teams and departments."
            />
            <TextSection
                icon={<GiDiamonds />}
                heading="Milestones"
                subtext="Break projects down into concrete phases."
            />
            <TextSection
                icon={<FaChartBar />}
                heading="Progress insights"
                subtext="Track scope, velocity, and progress over time."
            />
        </div>
    );
};

export default TextSectionsGrid;
