'use client';

import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const GithubRedirectButton = () => {

    const [stars, setStars] = useState<number | null>(null);

    const githubRepoUrl = 'https://github.com/The-Commit-Company/raven';

    // Keys for localStorage caching
    const cacheKeys = {
        stars: 'github-stars',
        forks: 'github-forks',
        watchers: 'github-watchers',
        timestamp: 'github-timestamp',
    };

    const fetchRepoData = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/The-Commit-Company/raven');
            const data = await response.json();

            // Update state with fetched data
            setStars(data.stargazers_count);

            // Cache the fetched data in localStorage
            localStorage.setItem(cacheKeys.stars, data.stargazers_count.toString());
            localStorage.setItem(cacheKeys.forks, data.forks_count.toString());
            localStorage.setItem(cacheKeys.watchers, data.subscribers_count.toString());
            localStorage.setItem(cacheKeys.timestamp, Date.now().toString()); // Save the current timestamp
        } catch (error) {
            console.error('Error fetching repository data:', error);
        }
    };

    useEffect(() => {
        const cachedStars = localStorage.getItem(cacheKeys.stars);
        const cachedTime = localStorage.getItem(cacheKeys.timestamp);

        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        const lastFetched = cachedTime ? parseInt(cachedTime, 10) : 0;

        // Check if cached data exists and is still valid (within 1 day)
        if (Date.now() - lastFetched < oneDayInMilliseconds) {
            if (cachedStars) setStars(parseInt(cachedStars, 10));
        } else {
            // Fetch new data if no valid cache is found
            fetchRepoData();
        }
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
