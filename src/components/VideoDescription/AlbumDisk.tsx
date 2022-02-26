import styles from './styles.module.css';

const AlbumDisk = ({albumCover}) => {
    return (
        <div className={styles.album}>
            <img className={styles.albumImage} src={albumCover} alt="Album" />
        </div>
    );
};

export default AlbumDisk;
