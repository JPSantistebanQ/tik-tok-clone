import SongTicker from '../SongTicker';
import AlbumDisk from './AlbumDisk';
import styles from './styles.module.css';

const VideoDescription = ({albumCover, author, description, songTitle}) => {
    return (
        <footer className={styles.description}>
            <div className={styles.textWrapper}>
                <section>
                    <strong>
                        <a className={styles.author} href={`/user/${author}`}>
                            @{author}
                        </a>
                    </strong>
                </section>
                <section>
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
