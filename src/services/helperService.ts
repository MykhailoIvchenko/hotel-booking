function isValidWhatsAppNumber(number: string) {
  const regex = /^\+\d{7,15}$/;
  return regex.test(number);
}

export const helperService = { isValidWhatsAppNumber };
