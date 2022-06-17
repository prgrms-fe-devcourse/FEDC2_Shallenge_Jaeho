import axios from "@lib/axios";

export const fetchPostLogin = (email: string, password: string) =>
  axios.post("/login", {
    data: {
      email,
      password,
    },
  });

export const fetchGetAuthUser = () => axios.get("/auth-user");

export const fetchPostLogout = () => axios.post("/logout");
