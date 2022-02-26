import Marquee from 'react-fast-marquee';

import {MusicIcon} from '../Icons/MusicIcon';
import styles from './styles.module.css';

const SongTicker = ({songTitle}) => {
    return (
        <div className={styles.song}>
            <MusicIcon />

            <Marquee gradient={false} speed={100}>
                {songTitle}
            </Marquee>
        </div>
    );
};

export default SongTicker;
