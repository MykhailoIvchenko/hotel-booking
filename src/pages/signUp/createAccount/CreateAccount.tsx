import styles from './createAccount.module.css';
import CreateAccountForm from './CreateAccountForm';

const CreateAccount: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>Create an Account</h2>
        <p className={styles.description}>
          Join us and let's make it happen! We'll handle the details while you
          enjoy the adventure.
        </p>
      </div>

      <div className={styles.item}>
        <CreateAccountForm />
      </div>
    </section>
  );
};

export default CreateAccount;
