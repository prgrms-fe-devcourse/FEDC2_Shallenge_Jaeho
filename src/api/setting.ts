import axios from "@/lib/axios";

export const fetchPutUpdateMyInfo = (fullName: string) =>
  axios.put("/settings/update-user", {
    fullName,
    username: "",
  });

export const fetchPutUpdatedPassword = (password: string) =>
  axios.put("/settings/update-password", {
    password,
  });
