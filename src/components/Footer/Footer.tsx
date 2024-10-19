import { FC } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GithubRedirectButton from './GithubRedirectButton';

const Footer: FC = () => {
    return (
        <footer className="relative bg-backgroundDark text-gray-300 pt-8 md:pb-24 pb-12 px-8 border-t border-borderAccentDark overflow-hidden">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start relative z-10 space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm text-gray-400">Made with ♡ by The Commit Company</p>
                </div>
                <div className="w-full md:w-auto flex justify-center md:justify-start items-center space-x-4">
                    <a aria-label="Github"
                        href='https://github.com/The-Commit-Company/raven' className='text-gray-400 hover:text-white'>
                        <FaGithub className='w-5 h-5' />
                    </a>
                    <a aria-label="X (Previously) Twitter"
                        href="https://x.com/ravenchat_ai?s=21" className="text-gray-400 hover:text-white">
                        <FaXTwitter className="w-5 h-5" />
                    </a>
                    <a aria-label="LinkedIn"
                        href="https://www.linkedin.com/company/the-commit-company" className="text-gray-400 hover:text-white">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a aria-label="YouTube"
                        href="https://www.youtube.com/channel/UCsAWxDJJ62pIOyq8QIo86fA" className="text-gray-400 hover:text-white">
                        <FaYoutube className="w-5 h-5" />
                    </a>
                    {/* Github Button inline */}
                    <GithubRedirectButton />
                </div>
            </div>
            {/* Half-visible "raven" text at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 text-center hidden md:block z-0">
                <h1 className="text-backgroundDarker font-semibold leading-none text-[150px] lg:text-[400px] font-calsans"
                    style={{ transform: 'translateY(35%)' }}>
                    raven
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
