'use client';

import { FC } from 'react';
import Image from 'next/image';

// Define interface for the grid items
interface GridItemProps {
  title: string;
  description: string;
  image: React.ReactNode;
  className?: string;
  headingPosition?: 'above' | 'below';
}

// Data for the grid/slider items
const gridItems: GridItemProps[] = [
  {
    title: 'Craft your messages with Rich Text',
    description: 'Easily send messages with formatting, highlights, links, emojis, code blocks, mentions and more',
    image: <div className="border border-gray-100 rounded-md shadow-sm">
      <video src="/assets/MessageFormatting.mov" width={800} height={200} playsInline autoPlay muted loop className="rounded-md" />
    </div>,
    className: 'md:col-span-2',
    headingPosition: 'below',
  },
  {
    title: 'Set your Availability',
    description: 'Are you available to chat? Set your status and let others know when you are busy or away',
    image: <div className="border border-gray-100 rounded-md shadow-sm p-1">
      <Image src="/assets/AvailabilityStatus.png" alt="Notification Controls" width={320} height={200} className="rounded-md" />
    </div>,
    headingPosition: 'below',
  },
  {
    title: 'Quick Message Actions',
    description: 'Simply right click a message to see the available actions - reply, edit, delete, copy, forward, create a thread etc...',
    image: <div className="border border-gray-100 rounded-md shadow-sm p-1">
      <Image src="/assets/MessageActions.png" alt="Message Actions" width={200} height={200} className="rounded-md" />
    </div>,
    headingPosition: 'below',
  },
  {
    title: 'Share Images, Documents, or Memes',
    description: 'Need to share a file? Simply drag and drop it onto the screen. You can also find and share memes using our GIF search',
    image: <div className="border border-gray-100 rounded-md shadow-sm p-1">
      <Image src="/assets/ShareMemes.png" alt="Share Images, Documents, or Memes" width={720} height={200} className="rounded-md" />
    </div>,
    className: 'md:col-span-2',
    headingPosition: 'above',
  },
];

// Main Features Grid Component
const FeaturesBentoGrid: FC = () => {
  return (
    <div className="md:py-36 py-16 px-4 sm:px-6 md:px-8">
      {/* Section heading */}
      <h2 className="md:text-5xl text-2xl font-bold md:px-0 px-1 text-gray-800 md:mb-12 mb-8 max-w-6xl mx-auto">Everything you need to chat, share and collaborate</h2>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
        {gridItems.map((item, index) => (
          <GridCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            className={item.className}
            headingPosition={item.headingPosition}
          />
        ))}
      </div>
    </div>
  );
};

// Grid card component
const GridCard: FC<GridItemProps> = ({ title, description, image, className, headingPosition = 'above' }) => (
  <div className={`bg-white rounded-xl shadow-xs border-4 border-gray-50 outline outline-gray-100 p-4 sm:p-6 flex flex-col justify-between items-start ${className}`}>
    {headingPosition === 'above' && (
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl md:text-xl text-gray-800 font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-[14px] sm:text-base">{description}</p>
      </div>
    )}
    <div className="relative w-full flex items-center justify-center mb-4">
      {image}
    </div>
    {headingPosition === 'below' && (
      <div>
        <h2 className="text-lg sm:text-xl md:text-xl text-gray-800 font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-[14px] sm:text-base">{description}</p>
      </div>
    )}
  </div>
);

export default FeaturesBentoGrid;
