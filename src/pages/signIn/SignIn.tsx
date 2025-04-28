import styles from './signIn.module.css';
import SignInForm from './signInForm/SignInForm';

const SignIn: React.FC = () => {
  return (
    <section className={styles.container}>
      {/*TODO: Implement separate components*/}
      <div>
        <h2 className={styles.title}>Sign In</h2>

        <h4 className={styles.subtitle}>Welcome to Destination Tour Leaders</h4>

        <p className={styles.description}>
          Your Gateway to Adventure. Sign In and Explore!
        </p>
      </div>

      <SignInForm />
    </section>
  );
};

export default SignIn;
