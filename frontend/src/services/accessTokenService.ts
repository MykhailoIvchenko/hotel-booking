import { LocalStorageKeys } from '@/utils/enums';
import { localStorageService } from './localStorageService';

export const accessTokenService = {
  get: () => localStorageService.get(LocalStorageKeys.AccessToken),
  save: (token: string) =>
    localStorageService.save(LocalStorageKeys.AccessToken, token),
  remove: () => localStorageService.remove(LocalStorageKeys.AccessToken),
};
