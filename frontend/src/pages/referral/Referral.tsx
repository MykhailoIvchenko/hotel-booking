import ReferralForm from './referralForm/ReferralForm';
import styles from './refferal.module.css';

const Referral: React.FC = () => {
  return (
    <section className={styles.container}>
      {/*TODO: Implement separate components*/}
      <div>
        <h2 className={styles.title}>Have a Referral Code?</h2>

        <p className={styles.description}>
          Enter your referral code below to unlock exclusive benefits or
          discounts. If you don’t have a code, you can skip this step.
        </p>
      </div>

      <ReferralForm />
    </section>
  );
};

export default Referral;
