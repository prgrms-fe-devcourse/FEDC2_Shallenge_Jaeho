import axios from "axios";

import { loadTokenFromLocalStorage } from "./localStorage";

const BASE_URL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = loadTokenFromLocalStorage();
  if (!config.headers) {
    return;
  }
  const headers = config.headers;
  headers.Authorization = token ? `Bearer ${token}` : "";
});

instance.interceptors.response.use();

export default instance;
