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
        src: 'https://v16-webapp.tiktok.com/4bd1205ead4d1f5d35f3920925e3b561/62188dbe/video/tos/useast2a/tos-useast2a-ve-0068c001/53c8a0ca9ec1402fb2e247a9247d7c52/?a=1988&br=2514&bt=1257&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThFxJ2DXq&l=202202250204190101890660470D1051C2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amU8eWU6ZmdvOjMzNzczM0ApOmdlZjU2ZjtkNzU3PGU0ZmdwNmdjcjRnMjJgLS1kMTZzczExNWEvYS4yYzVfYjFjLl46Yw%3D%3D&vl=&vr=',
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
        src: 'https://v16-webapp.tiktok.com/4bd1205ead4d1f5d35f3920925e3b561/62188dbe/video/tos/useast2a/tos-useast2a-ve-0068c001/53c8a0ca9ec1402fb2e247a9247d7c52/?a=1988&br=2514&bt=1257&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThFxJ2DXq&l=202202250204190101890660470D1051C2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amU8eWU6ZmdvOjMzNzczM0ApOmdlZjU2ZjtkNzU3PGU0ZmdwNmdjcjRnMjJgLS1kMTZzczExNWEvYS4yYzVfYjFjLl46Yw%3D%3D&vl=&vr=',
    },
];
const FeedVideos = () => {
    return VIDEOS.map((video) => (
        <div className={styles.item} key={video.id}>
            <VideoPlayer {...video} />
        </div>
    ));
};
export default FeedVideos;
