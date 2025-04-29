function get(key: string): string | null {
  const value = localStorage.getItem(key);

  return value;
}

function save(key: string, value: string | number | boolean | object): void {
  const valueToSave = JSON.stringify(value);

  localStorage.setItem(key, valueToSave);
}

function remove(key: string): void {
  localStorage.removeItem(key);
}

export const localStorageService = { get, save, remove };
