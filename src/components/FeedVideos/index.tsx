import {useEffect, useState} from 'react';

import {getVideos} from '../../services';
import VideoPlayer from '../VideoPlayer';
import styles from './styles.module.css';

const VIDEOS = [
    {
        id: 1,
        author: 'cocinaconcoqui',
        description:
            'Siguiendo los consejos de papá 🥰 #cocinaconcoqui #recetasfaciles #aprendeentiktok #aprendecontiktok #recetassaludables #cocinando',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'sonido original creado por cocinaconcoqui',
        albumCover:
            'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7c4a1809a822f371933be136ad0ba2b2~c5_720x720.jpeg?x-expires=1645840800&x-signature=5vWjUTehYul5ABAoS13nl23I2h8%3D',
        src: 'assets/demo.mp4',
    },
    {
        id: 2,
        author: 'Food Inspiration',
        description:
            'Today, I made pizza at home #food #yumup #learnontiktok #fyp #foryoupage',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'Title',
        albumCover:
            'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/d346247c8fc648f3a3f24861f0220b26~c5_200x200.jpeg',
        src: 'assets/demo.mp4',
    },
    {
        id: 3,
        author: 'Food Inspiration',
        description:
            'Today, I made pizza at home #food #yumup #learnontiktok #fyp #foryoupage',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'Title',
        albumCover:
            'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/d346247c8fc648f3a3f24861f0220b26~c5_200x200.jpeg',
        src: 'assets/demo.mp4',
    },
    {
        id: 4,
        author: 'Food Inspiration',
        description:
            'Today, I made pizza at home #food #yumup #learnontiktok #fyp #foryoupage',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'Title',
        albumCover:
            'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/d346247c8fc648f3a3f24861f0220b26~c5_200x200.jpeg',
        src: 'assets/demo.mp4',
    },
];
const FeedVideos = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getVideos().then(([errorData, videosData]) => {
            if (error) return setError(errorData);
            setVideos(videosData);
        });
        return () => {};
    }, []);

    if (error) return <span>{error}</span>;

    return videos.map((video) => {
        const {
            user: {avatar, username},
        } = video;
        console.log('video: ', video);

        return (
            <div className={styles.item} key={video.id}>
                <VideoPlayer {...video} avatar={avatar} username={username} />
            </div>
        );
    });
};
export default FeedVideos;
