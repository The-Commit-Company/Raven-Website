'use client';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeekData {
    total: number;
    week: number;
    days: number[];
}

interface RepoData {
    stargazers_count: number;
    forks_count: number;
    subscribers_count: number;
}

const cacheKeys = {
    stars: 'github-stars',
    forks: 'github-forks',
    watchers: 'github-watchers',
    commitActivity: 'github-commit-activity',
    timestamp: 'github-timestamp',
};

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 1 day in milliseconds

const GithubStats: React.FC = () => {

    const [commitData, setCommitData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [stars, setStars] = useState<number | null>(null);
    const [forks, setForks] = useState<number | null>(null);
    const [watchers, setWatchers] = useState<number | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to format dates from timestamps
    const formatDate = (timestamp: number): string => {
        const date = new Date(timestamp * 1000); // Convert Unix timestamp to JS date
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    // Check if the cached data is still valid based on CACHE_DURATION
    const isCacheValid = (): boolean => {
        const timestamp = localStorage.getItem(cacheKeys.timestamp);
        if (!timestamp) return false;
        const age = Date.now() - parseInt(timestamp, 10);
        return age < CACHE_DURATION;
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                if (isCacheValid()) {
                    // Load data from cache
                    const cachedCommitData = localStorage.getItem(cacheKeys.commitActivity);
                    const cachedStars = localStorage.getItem(cacheKeys.stars);
                    const cachedForks = localStorage.getItem(cacheKeys.forks);
                    const cachedWatchers = localStorage.getItem(cacheKeys.watchers);

                    if (cachedCommitData) {
                        const { labels, commitCounts } = JSON.parse(cachedCommitData);
                        setLabels(labels);
                        setCommitData(commitCounts);
                    }

                    if (cachedStars) setStars(parseInt(cachedStars, 10));
                    if (cachedForks) setForks(parseInt(cachedForks, 10));
                    if (cachedWatchers) setWatchers(parseInt(cachedWatchers, 10));

                    setIsLoading(false);
                    return;
                }

                // Fetch commit activity and repo data in parallel
                const [commitResponse, repoResponse] = await Promise.all([
                    fetch('https://api.github.com/repos/The-Commit-Company/raven/stats/commit_activity'),
                    fetch('https://api.github.com/repos/The-Commit-Company/raven')
                ]);

                if (!commitResponse.ok || !repoResponse.ok) {
                    throw new Error('Failed to fetch data from GitHub API');
                }

                const commitDataJson: WeekData[] = await commitResponse.json();
                const repoDataJson: RepoData = await repoResponse.json();

                // Process commit activity data
                const weeklyLabels = commitDataJson.map((week) => formatDate(week.week));
                const weeklyCommitCounts = commitDataJson.map((week) => week.total);

                setLabels(weeklyLabels);
                setCommitData(weeklyCommitCounts);

                // Cache commit activity data
                localStorage.setItem(cacheKeys.commitActivity, JSON.stringify({ labels: weeklyLabels, commitCounts: weeklyCommitCounts }));

                // Process repo data
                setStars(repoDataJson.stargazers_count);
                setForks(repoDataJson.forks_count);
                setWatchers(repoDataJson.subscribers_count);

                // Cache repo data
                localStorage.setItem(cacheKeys.stars, repoDataJson.stargazers_count.toString());
                localStorage.setItem(cacheKeys.forks, repoDataJson.forks_count.toString());
                localStorage.setItem(cacheKeys.watchers, repoDataJson.subscribers_count.toString());

                // Update cache timestamp
                localStorage.setItem(cacheKeys.timestamp, Date.now().toString());

            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data from GitHub API.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, []);

    const data = {
        labels, // Weekly labels (dates) for the chart
        datasets: [
            {
                label: 'Weekly Commits',
                data: commitData, // Weekly commit data
                borderColor: '#00AB66',
                backgroundColor: '#71BC78',
                tension: 0.4, // Curved lines
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove grid lines on the x-axis
                },
                ticks: {
                    display: false, // Remove the ticks/labels on the x-axis (weeks/dates)
                },
            },
            y: {
                grid: {
                    display: false, // Remove grid lines on the y-axis
                },
                beginAtZero: true, // Ensure the y-axis starts at 0
                ticks: {
                    stepSize: 20, // Set tick step to 20 units
                },
            },
        },
    };

    return (
        <a className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 bg-gray-100 md:p-6 p-4 rounded-xl"
            href='https://github.com/The-Commit-Company/raven'>
            <h3 className="text-2xl font-bold mb-4">Raven</h3>

            <div className="flex flex-wrap space-x-2 mb-4">
                <span className="px-3 py-1 border border-gray-300 text-gray-600 rounded-full text-sm">react</span>
                <span className="px-3 py-1 border border-gray-300 text-gray-600 rounded-full text-sm">frappe</span>
                <span className="px-3 py-1 border border-gray-300 text-gray-600 rounded-full text-sm">typescript</span>
                <span className="px-3 py-1 border border-gray-300 text-gray-600 rounded-full text-sm">python</span>
            </div>

            <div className="flex flex-wrap items-center space-x-4 text-gray-500 text-sm font-medium mb-4 pl-1">
                <div className="flex items-center space-x-2">
                    <FaGithub className='text-lg' />
                    <span>AGPL-3.0</span>
                </div>
                <span>{stars !== null ? stars.toLocaleString() : '...'} stars</span>
                <span>{forks !== null ? forks.toLocaleString() : '...'} forks</span>
                <span>{watchers !== null ? watchers.toLocaleString() : '...'} watchers</span>
            </div>

            {/* Commit Activity Graph */}
            <div className="w-full p-4 bg-white rounded-lg">
                {isLoading ? (
                    <div className="loading-skeleton text-sm">Loading...</div>
                ) : error ? (
                    <div className="error text-sm text-red-500">{error}</div>
                ) : commitData && commitData.length > 0 ? (
                    <Line data={data} options={options} />
                ) : (
                    <div className="no-data text-sm">No data available</div>
                )}
            </div>
            <p className="text-xs text-gray-500 mt-2">Commits per week, updated a day ago</p>
        </a>
    );
};

export default GithubStats;
