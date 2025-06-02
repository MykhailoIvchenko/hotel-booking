import { SignUpSteps } from '@/utils/enums';
import { useState } from 'react';
import SignUpIntro from './signUpIntro/SignUpIntro';
import OtpVerification from '@/components/otpVerification/OtpVerification';
import CreateAccount from './createAccount/CreateAccount';
import Referral from './referral/Referral';

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<SignUpSteps>(
    SignUpSteps.Referral
  );

  if (currentStep === SignUpSteps.Referral) {
    return <Referral setStep={setCurrentStep} />;
  }

  if (currentStep === SignUpSteps.WhatsAppNumber) {
    return <SignUpIntro setStep={setCurrentStep} />;
  }

  if (currentStep === SignUpSteps.OtpVerification) {
    return <OtpVerification setStep={setCurrentStep} />;
  }

  if (currentStep === SignUpSteps.CreateAccount) {
    return <CreateAccount />;
  }
};

export default SignUp;
