import VideoCard from '@/components/videoCard/VideoCard';
import styles from './posterCard.module.css';

interface IPosterCardProps {
  fileType: string;
  mediaUrl: string;
  posterUrl?: string;
}

const PosterCard: React.FC<IPosterCardProps> = ({
  mediaUrl,
  fileType,
  posterUrl,
}) => {
  const renderFileTag = (mediaUrl: string, fileType: string) => {
    switch (true) {
      case fileType === 'image':
        return <img src={mediaUrl} alt='Card poster' />;
      case fileType === 'video':
        return <VideoCard mediaUrl={mediaUrl} posterUrl={posterUrl} />;
    }
  };

  return <div className={styles.card}>{renderFileTag(mediaUrl, fileType)}</div>;
};

export default PosterCard;
