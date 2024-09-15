import React from 'react';
import OpenSourceInfo from './OpenSourceInfo';
import GithubStats from './GithubStats';

const OpenSource: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-16 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto">
            <OpenSourceInfo />
            <GithubStats />
        </section>
    );
};

export default OpenSource;
