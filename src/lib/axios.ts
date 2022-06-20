import axios from "axios";

import { loadTokenFromLocalStorage } from "./localStorage";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(`Axios config headers must be provided`);
  }
  const token = loadTokenFromLocalStorage();
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

export default instance;
