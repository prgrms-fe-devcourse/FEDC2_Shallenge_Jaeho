import { AxiosError } from "axios";

import axios from "@/lib/axios";
import { User } from "src/types";

export const fetchGetUserList = async () => {
  const { data } = await axios.get<User[]>("/users/get-users");
  return data;
};

export const fetchGetOnlineUserList = () => axios.get("/users/online-users");

export const fetchGetUserById = async (userId: string) => {
  const { data } = await axios.get<User>(`/users/${userId}`);

  return data;
};

export const fetchGetFollowUserList = async (followUserIdList: string[]) => {
  return await Promise.all(
    followUserIdList.map((followUserId) => fetchGetUserById(followUserId))
  );
};

export const fetchPostUserProfileImage = async (formData: FormData) => {
  const { data } = await axios.post<User>("/users/upload-photo", formData);
  return data;
};
