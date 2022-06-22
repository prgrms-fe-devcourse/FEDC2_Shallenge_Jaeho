import { useQuery } from "react-query";
import { fetchGetUserById } from "@api/user";

const useGetUserById = (userId: string) => {
  return useQuery(["user", userId], () => fetchGetUserById(userId));
};

export default useGetUserById;
