function get(key: string): string | null {
  const value = localStorage.getItem(key);

  const parsedValue = value ? JSON.parse(value) : '';

  return parsedValue;
}

function save(key: string, value: string | number | boolean | object): void {
  const valueToSave = JSON.stringify(value);

  localStorage.setItem(key, valueToSave);
}

function remove(key: string): void {
  localStorage.removeItem(key);
}

export const localStorageService = { get, save, remove };
