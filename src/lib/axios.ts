import axios from "axios";
import { getToken } from "../lib/token";

const BASE_URL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (!config.headers) {
    return;
  }
  const headers = config.headers;
  headers.Authorization = token ? `Bearer ${token}` : "";
});

instance.interceptors.response.use();

export default instance;
