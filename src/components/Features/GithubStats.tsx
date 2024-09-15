'use client';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GithubStats: React.FC = () => {
    const [commitData, setCommitData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    const [stars, setStars] = useState<number | null>(null);
    const [forks, setForks] = useState<number | null>(null);
    const [watchers, setWatchers] = useState<number | null>(null);

    const cacheKeys = {
        stars: 'github-stars',
        forks: 'github-forks',
        watchers: 'github-watchers',
        commitActivity: 'github-commit-activity',
        timestamp: 'github-timestamp',
    };

    // Function to format dates from timestamps
    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000); // Convert Unix timestamp to JS date
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const fetchCommitActivity = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/The-Commit-Company/raven/stats/commit_activity');
            const data = await response.json();

            if (data.length === 0) {
                console.error("No commit data found");
                return;
            }

            // Directly set weekly data for the entire duration
            const weeklyLabels = data.map((week: any) => formatDate(week.week)); // Get week labels as dates
            const weeklyCommitCounts = data.map((week: any) => week.total); // Use the total commits for each week

            setLabels(weeklyLabels);
            setCommitData(weeklyCommitCounts);

            localStorage.setItem(cacheKeys.commitActivity, JSON.stringify({ labels: weeklyLabels, commitCounts: weeklyCommitCounts }));
        } catch (error) {
            console.error('Error fetching commit activity:', error);
        }
    };

    useEffect(() => {
        const cachedCommitData = localStorage.getItem(cacheKeys.commitActivity);
        if (cachedCommitData) {
            const { labels, commitCounts } = JSON.parse(cachedCommitData);
            setLabels(labels);
            setCommitData(commitCounts);
        } else {
            fetchCommitActivity();
        }

        fetchRepoData();
    }, []);

    const fetchRepoData = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/The-Commit-Company/raven');
            const data = await response.json();

            setStars(data.stargazers_count);
            setForks(data.forks_count);
            setWatchers(data.subscribers_count);

            localStorage.setItem(cacheKeys.stars, data.stargazers_count.toString());
            localStorage.setItem(cacheKeys.forks, data.forks_count.toString());
            localStorage.setItem(cacheKeys.watchers, data.subscribers_count.toString());
            localStorage.setItem(cacheKeys.timestamp, Date.now().toString());
        } catch (error) {
            console.error('Error fetching repository data:', error);
        }
    };

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
                <Line data={data} options={options} />
            </div>
            <p className="text-xs text-gray-500 mt-2">Commits per week, updated a day ago</p>
        </a>
    );
};

export default GithubStats;
