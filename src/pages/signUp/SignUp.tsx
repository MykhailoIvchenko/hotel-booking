import { SignUpSteps } from '@/utils/enums';
import { useState } from 'react';
import SignUpIntro from './signUpIntro/SignUpIntro';

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<SignUpSteps>(
    SignUpSteps.WhatsAppNumber
  );

  if (currentStep === SignUpSteps.WhatsAppNumber) {
    return <SignUpIntro setStep={setCurrentStep} />;
  }

  if (currentStep === SignUpSteps.OtpVerification) {
    return <></>;
  }

  if (currentStep === SignUpSteps.CreateAccount) {
    return <></>;
  }
};

export default SignUp;
