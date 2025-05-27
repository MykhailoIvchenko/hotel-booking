import img1 from '@/assets/img/promo/img1.webp';
import img2 from '@/assets/img/promo/img2.webp';
import img3 from '@/assets/img/promo/img3.webp';
import img4 from '@/assets/img/promo/img4.webp';
import PosterCard from './PosterCard';
import clsx from 'clsx';
import styles from './postersBlock.module.css';

const firstColPosters = [
  {
    id: 1,
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: 'video',
    posterUrl: img1,
  },
  {
    id: 2,
    mediaUrl: img2,
    type: 'image',
  },
];

const secondColPosters = [
  {
    id: 3,
    mediaUrl: img3,
    type: 'image',
  },
  {
    id: 4,
    mediaUrl: img4,
    type: 'image',
  },
];

const PostersBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.column, styles.columnBottomGap)}>
        {firstColPosters.map((poster) => (
          <PosterCard
            key={poster.id}
            fileType={poster.type}
            mediaUrl={poster.mediaUrl}
            posterUrl={poster.posterUrl}
          />
        ))}
      </div>

      <div className={clsx(styles.column, styles.columnTopGap)}>
        {secondColPosters.map((poster) => (
          <PosterCard
            key={poster.id}
            fileType={poster.type}
            mediaUrl={poster.mediaUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PostersBlock;
