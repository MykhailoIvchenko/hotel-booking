import { SignUpSteps } from '@/utils/enums';
import { useState } from 'react';
import SignUpIntro from './signUpIntro/SignUpIntro';
import OtpVerification from '@/components/otpVerification/OtpVerification';
import CreateAccount from './createAccount/CreateAccount';

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<SignUpSteps>(
    SignUpSteps.WhatsAppNumber
  );

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
