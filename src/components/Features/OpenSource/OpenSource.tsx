import React from 'react';
import OpenSourceInfo from './OpenSourceInfo';
import GithubStats from './GithubStats';

const OpenSource: React.FC = () => {
    return (
        <section className="flex flex-col gap-6 lg:flex-row justify-between items-center py-24 md:py-28 lg:py-32 max-w-6xl mx-auto">
            <OpenSourceInfo />
            <GithubStats />
        </section>
    );
};

export default OpenSource;
