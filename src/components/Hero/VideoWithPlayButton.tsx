import { useState, useRef, useEffect } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { ImSpinner2 } from 'react-icons/im'; // Loading spinner

const VideoWithPlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBuffering, setIsBuffering] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const SPINNER_DELAY = 500; // milliseconds
    const INITIAL_BUFFER_PERCENTAGE = 50; // percent
    let bufferingTimeout: NodeJS.Timeout | null = null;

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                // Check if enough is buffered to start playing
                const buffered = videoRef.current.buffered;
                const duration = videoRef.current.duration;

                if (buffered.length && duration) {
                    const bufferedEnd = buffered.end(buffered.length - 1);
                    const percentBuffered = (bufferedEnd / duration) * 100;

                    if (percentBuffered >= INITIAL_BUFFER_PERCENTAGE) {
                        videoRef.current.play();
                        // No need to set isPlaying here; onPlay event will handle it
                    } else {
                        // Show spinner and start buffering
                        setIsBuffering(true);
                        videoRef.current.play();
                    }
                } else {
                    // If buffering info is unavailable, start playback with spinner
                    setIsBuffering(true);
                    videoRef.current.play();
                }
            } else {
                videoRef.current.pause();
                // No need to set isPlaying here; onPause event will handle it
            }
        }
    };

    // Handle when the video starts playing
    const handlePlay = () => {
        setIsPlaying(true);
    };

    // Handle when the video is paused
    const handlePause = () => {
        setIsPlaying(false);
        setIsBuffering(false); // Ensure spinner is hidden when paused
    };

    const handleWaiting = () => {
        if (bufferingTimeout) clearTimeout(bufferingTimeout);

        bufferingTimeout = setTimeout(() => {
            setIsBuffering(true);
        }, SPINNER_DELAY);
    };

    const handlePlaying = () => {
        if (bufferingTimeout) clearTimeout(bufferingTimeout);
        setIsBuffering(false);
    };

    useEffect(() => {
        return () => {
            if (bufferingTimeout) clearTimeout(bufferingTimeout);
        };
    }, [bufferingTimeout]);

    return (
        <div className="relative">
            <video
                ref={videoRef}
                poster={'assets/HeroVideoCover.webp'}
                className="rounded-md md:rounded-xl border border-gray-200 object-cover"
                width={1000}
                src={'assets/HeroVideo.mp4'}
                muted
                playsInline
                onClick={togglePlayPause}
                onPlay={handlePlay}
                onPause={handlePause}
                onWaiting={handleWaiting}
                onPlaying={handlePlaying}
            >
                <track kind="captions" srcLang="en" label="No captions available" default />
            </video>

            {/* Spinner */}
            {isBuffering && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md md:rounded-xl pointer-events-none"
                    aria-hidden="true"
                >
                    <ImSpinner2 className="animate-spin text-white text-4xl" />
                </div>
            )}

            {/* Play Button */}
            {!isPlaying && !isBuffering && (
                <button
                    aria-label="Play Video"
                    title="Play Video"
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
