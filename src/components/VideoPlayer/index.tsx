import clsx from 'clsx';
import {useRef} from 'react';

import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer';
import VideoDescription from '../VideoDescription';
import styles from './styles.module.css';
import VideoPlayerActions from './VideoPlayerActions';

const VideoPlayer = ({
    albumCover,
    username,
    avatar,
    description,
    src,
    songTitle,
    comments,
    likes,
    messages,
    shares,
}) => {
    const video = useRef(null);
    const {playing, handlePlay} = useIntersectionVideoPlayer({video});

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
            <i
                className={playerClassName}
                onClick={handlePlay}
                onKeyDown={handlePlay}
                role="button"
                tabIndex={0}
            />
            <VideoPlayerActions
                avatar={avatar}
                username={username}
                comments={comments}
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoDescription
                albumCover={albumCover}
                username={username}
                description={description}
                songTitle={songTitle}
            />
        </div>
    );
};
export default VideoPlayer;
