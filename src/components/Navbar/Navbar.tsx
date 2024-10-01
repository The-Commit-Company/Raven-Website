"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import styles from './Navbar.module.css';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Add scroll event listener to toggle border
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-white fixed top-0 w-full pb-3 z-20 transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 shadow-sm' : ''
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Left side of the navbar */}
                    <div className="flex-shrink-0 flex pt-1.5">
                        <Link href="/" className="text-3xl text-gray-800 leading-none font-calsans">
                            raven
                        </Link>
                    </div>

                    {/* Hamburger Menu for mobile */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <CgClose className="h-5 w-5" />
                            ) : (
                                <HiOutlineMenuAlt3 className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Links for larger screens */}
                    <div className="hidden sm:flex sm:space-x-8 sm:items-center text-sm pt-3">
                        <Link href="https://github.com/The-Commit-Company/raven" className={styles.linkHover}>
                            Github
                        </Link>
                        <Link href="https://x.com/ravenchat_ai?s=21" className={styles.linkHover}>
                            Twitter
                        </Link>
                        <Link href="https://community.ravenapp.cloud" className={styles.linkHover}>
                            Community
                        </Link>
                        <Link href="https://www.linkedin.com/company/the-commit-company" className={styles.linkHover}>
                            About
                        </Link>
                    </div>

                    {/* Start for free button */}
                    <div className="hidden sm:flex sm:space-x-4 sm:items-center pt-3">
                        <Link href="#" className="bg-black text-white px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-md">
                            Start for free
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-2 p-4">
                        <Link href="https://github.com/The-Commit-Company/raven" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Github
                        </Link>
                        <Link href="https://x.com/ravenchat_ai?s=21" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Twitter
                        </Link>
                        <Link href="https://community.ravenapp.cloud" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Community
                        </Link>
                        <div className="mt-4 flex justify-between">
                            <Link href="https://www.linkedin.com/company/the-commit-company" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                                About
                            </Link>
                            <Link href="#" className="bg-black text-white px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 hover:shadow-md">
                                Start for free
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
