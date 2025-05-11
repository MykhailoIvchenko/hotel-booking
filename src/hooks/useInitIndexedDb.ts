import { useEffect } from 'react';
import { indexedDbService } from '../services/indexedDbService';
import { DbTables } from '@/utils/enums';

export function useInitIndexedDb() {
  useEffect(() => {
    indexedDbService
      .openDB([DbTables.Users])
      .then(() => {
        console.log('IndexedDB initialized');
      })
      .catch((error) => {
        console.error('Failed to initialize IndexedDB', error);
      });
  }, []);
}
