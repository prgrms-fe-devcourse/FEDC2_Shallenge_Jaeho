const storage = window.localStorage;

const TOKEN_KEY = "token";

export const saveTokenToLocalStorage = (token: string) => {
  return storage.setItem(TOKEN_KEY, token);
};

export const loadTokenFromLocalStorage = (): string | null => {
  const token = storage.getItem(TOKEN_KEY);
  return token;
};
