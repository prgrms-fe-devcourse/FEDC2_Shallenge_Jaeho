import axios from "@lib/axios";

export const fetchGetUserList = () => axios.get("/users/get-users");

export const fetchGetOnlineUserList = () => axios.get("/users/online-users");

export const fetchGetUserById = (userId: string) =>
  axios.get(`/users/${userId}`);

export const fetchGetFollowUserList = async (followUserIdList: string[]) => {
  console.log(followUserIdList);
  return await Promise.all(
    followUserIdList.map((followUserId) => fetchGetUserById(followUserId))
  );
};
