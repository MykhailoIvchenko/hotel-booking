import InstagramIcon from '@/assets/icons/instagram.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import XIcon from '@/assets/icons/x.svg?react';
import YoutubeIcon from '@/assets//icons/youtube.svg?react';
import styles from './socialMediaLinks.module.css';
import SocialMediaLink from './SocialMediaLink';

const mediaLinks = [
  { path: 'https://www.youtube.com/', icon: <InstagramIcon /> },
  { path: 'https://www.facebook.com/', icon: <FacebookIcon /> },
  { path: 'https://www.instagram.com/', icon: <XIcon /> },
  { path: 'https://x.com/', icon: <YoutubeIcon /> },
];

const SocialMediaLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>Follow us</span>

      <ul className={styles.linksList}>
        {mediaLinks.map((link, i) => (
          <li key={i}>
            <SocialMediaLink icon={link.icon} path={link.path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
