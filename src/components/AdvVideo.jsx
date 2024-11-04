'use client'
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export const AdvVideo = (props) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const canvasRef = useRef(null);
    const { options, onReady } = props;

    useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    useEffect(() => {
        const video = playerRef.current;
        const canvas = canvasRef.current;
        console.log(videoRef.current);
        let step;
        const ctx = canvas.getContext("2d");
        ctx.filter = "blur(1px)";
        const draw = () => {
            ctx.drawImage(video.children_[0], 0, 0, canvas.width, canvas.height);
        };
        const drawLoop = () => {
            draw();
            step = window.requestAnimationFrame(drawLoop);
        };
        drawLoop()
    }, []);
    return (
        <div data-vjs-player className='w-full z-10 aspect-video'>
            <div className=' relative'>
                <div className='w-full z-10 rounded-lg aspect-video relative' ref={videoRef} />
                <canvas className='w-full absolute top-0 left-0 -z-10 h-full opacity-45 blur-3xl' style={{ transform: 'scale(1.2, 1.2)'}} width="10" height="5" aria-hidden="true" ref={canvasRef} />
            </div>
        </div>
    );
}


export default AdvVideo