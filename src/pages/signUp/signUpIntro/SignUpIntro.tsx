import { SignUpSteps } from '@/utils/enums';
import styles from './signUpIntro.module.css';
import SignUpForm from '../signUpForm/SignUpForm';

interface ISignUpIntroProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

const SignUpIntro: React.FC<ISignUpIntroProps> = ({ setStep }) => {
  return (
    <section className={styles.container}>
      {/*TODO: Implement separate components*/}

      <div>
        <h2 className={styles.title}>Sign Up</h2>

        <h4 className={styles.subtitle}>Welcome to Destination Tour Leaders</h4>

        <p className={styles.description}>
          Your Gateway to Adventure. Sign In and Explore!
        </p>
      </div>

      <SignUpForm setStep={setStep} />
    </section>
  );
};

export default SignUpIntro;
