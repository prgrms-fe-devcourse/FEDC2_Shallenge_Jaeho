import axios from "@lib/axios";
import { User } from "src/types";

export const fetchGetUserList = async () => {
  const { data } = await axios.get<User[]>("/users/get-users");
  return data;
};

export const fetchGetOnlineUserList = () => axios.get("/users/online-users");

export const fetchGetUserById = (userId: string) =>
  axios.get(`/users/${userId}`);

export const fetchGetFollowUserList = async (followUserIdList: string[]) => {
  return await Promise.all(
    followUserIdList.map((followUserId) => fetchGetUserById(followUserId))
  );
};

export const fetchPostUserProfileImage = (formData: FormData) =>
  axios.post("/users/upload-photo", formData);
