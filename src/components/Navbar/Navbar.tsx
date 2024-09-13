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
            className={`bg-white fixed top-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 shadow-sm' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side of the navbar */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-3xl font-bold text-gray-800 font-calsans">
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
                    <div className="hidden sm:flex sm:space-x-8 sm:items-center">
                        <Link href="#" className={styles.linkHover}>
                            Github
                        </Link>
                        <Link href="#" className={styles.linkHover}>
                            Twitter
                        </Link>
                        <Link href="#" className={styles.linkHover}>
                            Community
                        </Link>
                        <Link href="#" className={styles.linkHover}>
                            About
                        </Link>
                    </div>

                    {/* Start for free button */}
                    <div className="hidden sm:flex sm:space-x-4 sm:items-center">
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
                        <Link href="#" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Github
                        </Link>
                        <Link href="#" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Twitter
                        </Link>
                        <Link href="#" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
                            Community
                        </Link>
                        <div className="mt-4 flex justify-between">
                            <Link href="#" className="block text-gray-800 hover:text-black font-medium" onClick={toggleMenu}>
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
