import styles from './createAccount.module.css';

const CreateAccount: React.FC = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>Create an Account</h2>
        <p className={styles.description}>
          Join us and let's make it happen! We'll handle the details while you
          enjoy the adventure.
        </p>
      </div>
    </section>
  );
};

export default CreateAccount;
