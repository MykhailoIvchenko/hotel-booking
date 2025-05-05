function isValidWhatsAppNumber(number: string) {
  const regex = /^\+\d{7,15}$/;
  return regex.test(number);
}

function getTimeTextFromCreation(createdAt: number): string {
  const currentTime = Date.now();

  const timeSpan = currentTime - createdAt;

  const seconds = timeSpan / 1000;

  if (seconds < 60) {
    return `${seconds}s`;
  }

  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);

    return `${minutes}m`;
  }

  const hours = Math.floor(seconds / 3600);

  return `${hours}h`;
}

export const helperService = { isValidWhatsAppNumber, getTimeTextFromCreation };
