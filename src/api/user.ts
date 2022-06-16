import axios from "@lib/axios";

export const fetchGetUserList = () => axios.get("/users/get-users");

export const fetchGetOnlineUsers = () => axios.get("/users/online-users");
export const fetchGetUser = (userId: string) => axios.get(`/users/${userId}`);
