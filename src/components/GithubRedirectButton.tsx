'use client';

import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const GithubRedirectButton = () => {

    const [stars, setStars] = useState<number | null>(null);
    const githubRepoUrl = 'https://github.com/The-Commit-Company/raven';
    const cacheKey = 'github-stars';
    const cacheTimeKey = 'github-stars-timestamp';

    const fetchStars = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/The-Commit-Company/raven');
            const data = await response.json();
            setStars(data.stargazers_count);
            localStorage.setItem(cacheKey, data.stargazers_count.toString());
            localStorage.setItem(cacheTimeKey, Date.now().toString()); // Save the current timestamp
        } catch (error) {
            console.error('Error fetching star count:', error);
        }
    };

    useEffect(() => {
        const cachedStars = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);

        if (cachedStars && cachedTime) {
            const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
            const lastFetched = parseInt(cachedTime, 10);

            // Check if the cached data is older than one day
            if (Date.now() - lastFetched < oneDayInMilliseconds) {
                setStars(parseInt(cachedStars, 10)); // Use cached value
                return;
            }
        }

        // Fetch new data if not cached or cache expired
        fetchStars();
    }, []);

    return (
        <div
            className="flex items-center border border-gray-700 rounded-md overflow-hidden cursor-pointer"
            onClick={() => window.open(githubRepoUrl, '_blank')}
        >
            <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
                <FaRegStar className="w-4 h-4" />
                <span>Star</span>
            </div>
            <div className="px-3 py-2 text-sm font-medium text-gray-400 bg-gray-900">
                {stars !== null && stars !== undefined ? stars.toLocaleString() : 'Loading...'}
            </div>
        </div>
    );
};

export default GithubRedirectButton;
