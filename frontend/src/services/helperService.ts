import { DateValue } from '@/utils/types';

function isValidWhatsAppNumber(number: string) {
  const regex = /^\+\d{7,15}$/;
  return regex.test(number);
}

function getTimeTextFromCreation(createdAt: number): string {
  const currentTime = Date.now();

  const timeSpan = currentTime - createdAt;

  const seconds = Math.floor(timeSpan / 1000);

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

function getFormattedDate(dateValue: DateValue): string {
  if (dateValue && dateValue instanceof Date) {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(dateValue);
  }

  return '';
}

function getNameFromFullName(fullName: string): string {
  const namesArr = fullName.split(' ');

  if (namesArr.length > 0) {
    return namesArr[0];
  }

  return fullName;
}

function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      resolve(result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export const helperService = {
  isValidWhatsAppNumber,
  getFormattedDate,
  getTimeTextFromCreation,
  getNameFromFullName,
  convertFileToBase64,
};
