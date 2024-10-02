import { useState, useRef } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const VideoWithPlayButton = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="relative">
            <video
                ref={videoRef}
                className="rounded-md border border-gray-200"
                width={1000}
                src={'assets/HeroVideo.mp4'}
                muted
                playsInline
                onClick={togglePlayPause}
            ></video>
            {!isPlaying && (
                <button
                    className="absolute inset-0 flex items-center justify-center text-4xl rounded-md"
                    onClick={togglePlayPause}
                >
                    <FaCirclePlay />
                </button>
            )}
        </div>
    );
};

export default VideoWithPlayButton;
