import SongTicker from '../SongTicker';
import AlbumDisk from './AlbumDisk';
import styles from './styles.module.css';

const VideoDescription = ({albumCover, username, description, songTitle}) => {
    return (
        <footer className={styles.description}>
            <div className={styles.textWrapper}>
                <section>
                    <strong>
                        <a className={styles.author} href={`/user/${username}`}>
                            @{username}
                        </a>
                    </strong>
                    <p className={styles.text}>{description}</p>
                </section>
                <SongTicker songTitle={songTitle} />
            </div>
            <div>
                <AlbumDisk albumCover={albumCover} />
            </div>
        </footer>
    );
};

export default VideoDescription;
