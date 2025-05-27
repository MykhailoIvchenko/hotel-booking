import { IUser } from '@/utils/types';
import { indexedDbService } from './indexedDbService';
import { DbTables, LocalStorageKeys } from '@/utils/enums';
import { localStorageService } from './localStorageService';

type UserRecord = IUser & {
  passwordHash: string;
};

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function register(
  user: Omit<IUser, 'id'>,
  password: string
): Promise<IUser> {
  const users = await indexedDbService.getAll<UserRecord>(DbTables.Users);

  const existingUser = users.find((u) => u.email === user.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  const passwordHash = await hashPassword(password);

  const newUser: UserRecord = {
    ...user,
    id: crypto.randomUUID(),
    passwordHash,
  };

  await indexedDbService.save<UserRecord>(DbTables.Users, newUser);

  //TODO: Create a separate function for this
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = newUser;

  if (typeof safeUser.photo === 'object') {
    const photoUrl = URL.createObjectURL(safeUser.photo[0]);

    safeUser.photo = photoUrl;
  }

  return safeUser;
}

async function login(phone: string, password: string): Promise<IUser> {
  const users = await indexedDbService.getAll<UserRecord>(DbTables.Users);

  const user = users.find((u) => u.phone === phone);

  if (!user) {
    throw new Error('User not found');
  }

  const passwordHash = await hashPassword(password);

  if (user.passwordHash !== passwordHash) {
    throw new Error('Invalid password');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = user;

  if (typeof safeUser.photo === 'object') {
    const photoUrl = URL.createObjectURL(safeUser.photo[0]);

    safeUser.photo = photoUrl;
  }

  return safeUser;
}

async function getUserById(id: string): Promise<IUser | null> {
  const users = await indexedDbService.getAll<UserRecord>(DbTables.Users);

  const user = users.find((u) => u.id === id);
  if (!user) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = user;

  if (typeof safeUser.photo === 'object') {
    const photoUrl = URL.createObjectURL(safeUser.photo[0]);

    safeUser.photo = photoUrl;
  }

  return safeUser;
}

async function logout() {
  localStorageService.remove(LocalStorageKeys.UserId);
}

export const usersService = {
  getUserById,
  register,
  login,
  logout,
};
