import { useRef, useState } from 'react';
import styles from './videoCard.module.css';
import clsx from 'clsx';

interface IVideoCardProps {
  mediaUrl: string;
  posterUrl?: string;
}

const VideoCard: React.FC<IVideoCardProps> = ({ mediaUrl, posterUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src={mediaUrl}
        poster={posterUrl}
        className={clsx(styles.video, isPlaying && styles.videoPlaying)}
      ></video>
      {!isPlaying && (
        <button className={styles.playButton} onClick={handlePlay}></button>
      )}
    </div>
  );
};

export default VideoCard;
