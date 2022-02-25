import clsx from 'clsx';
import { useRef, useState } from 'react';

import styles from './styles.module.css';
import VideoPlayerActions from './VideoPlayerActions';

const VideoPlayer = ({ src }) => {
    const video = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        const { current: videoEl } = video;
        !playing ? videoEl.play() : videoEl.pause();
        setPlaying(!playing);
    };

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing,
    });

    return (
        <div className={styles.wrapper}>
            <video
                ref={video}
                className={styles.video}
                loop
                src={src}
                controls={false}
                onClick={handlePlay}>
                <track default kind="captions" />
                Sorry, your browser doesn&apos;t support embedded videos.
            </video>
            <button className={playerClassName} onClick={handlePlay}></button>
            <VideoPlayerActions></VideoPlayerActions>
        </div>
    );
};
export default VideoPlayer;
