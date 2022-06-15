import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use();

instance.interceptors.response.use();

export default instance;
