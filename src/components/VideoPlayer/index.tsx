import clsx from 'clsx';
import {useRef, useState} from 'react';

import VideoDescription from '../VideoDescription';
import styles from './styles.module.css';
import VideoPlayerActions from './VideoPlayerActions';

const VideoPlayer = ({albumCover, author, description, src, songTitle}) => {
    const video = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        const {current: videoEl} = video;
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
            <VideoPlayerActions />
            <VideoDescription
                albumCover={albumCover}
                author={author}
                description={description}
                songTitle={songTitle}
            />
        </div>
    );
};
export default VideoPlayer;
