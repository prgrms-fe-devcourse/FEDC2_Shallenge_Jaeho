import axios from "@lib/axios";

export const fetchPostLogin = (email: string, password: string) =>
  axios.post("/login", {
    email,
    password,
  });

export const fetchGetAuthUser = () => axios.get("/auth-user");

export const fetchPostLogout = () => axios.post("/logout");

export const fetchPostSignUp = (
  email: string,
  fullName: string,
  password: string
) =>
  axios.post("/signup", {
    data: {
      email,
      fullName,
      password,
    },
  });
