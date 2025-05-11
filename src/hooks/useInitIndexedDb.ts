import { useEffect } from 'react';
import { indexedDbService } from '../services/indexedDbService';

export function useInitIndexedDb() {
  useEffect(() => {
    indexedDbService
      .openDB(['users'])
      .then(() => {
        console.log('IndexedDB initialized');
      })
      .catch((error) => {
        console.error('Failed to initialize IndexedDB', error);
      });
  }, []);
}
