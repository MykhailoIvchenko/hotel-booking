import WhatsAppIcon from '@/assets/icons/whats-app.svg?react';
import styles from './contactButton.module.css';

const ContactButton: React.FC = () => {
  return (
    <button type={'button'} className={styles.button}>
      <WhatsAppIcon className={styles.icon}/>
    </button>
  );
};

export default ContactButton;
