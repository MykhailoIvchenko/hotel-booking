const VALID_REFERRAL_CODE = '123456';

const checkReferralCode = (code: string): boolean => {
  return code === VALID_REFERRAL_CODE;
};

export const referralService = { checkReferralCode };
