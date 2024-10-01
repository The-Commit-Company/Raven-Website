import React from 'react';
import TextSectionsGrid from './TextSectionsGrid';
import ImageSwitcher from './ImageSwitcher';

const AIFeatures: React.FC = () => {
    return (
        <div className="flex flex-col justify-center my-10 w-full max-w-6xl mx-auto">
            <ImageSwitcher />
            <TextSectionsGrid />
        </div>
    );
};

export default AIFeatures;
