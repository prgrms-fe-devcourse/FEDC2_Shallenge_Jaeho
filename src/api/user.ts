import axios from "@lib/axios";

export const fetchGetUserList = () => axios.get("/users/get-users");

export const fetchGetOnlineUserList = () => axios.get("/users/online-users");

export const fetchGetUserById = (userId: string) =>
  axios.get(`/users/${userId}`);

export const fetchPostUserProfileImage = (formData: FormData) =>
  axios.post("/users/upload-photo", formData);
