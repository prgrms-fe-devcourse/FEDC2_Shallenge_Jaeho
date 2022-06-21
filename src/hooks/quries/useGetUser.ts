import { useQuery } from "react-query";
import { fetchGetUserById } from "@api/user";

const useGetUserById = (userId: string) => {
  return useQuery(["User", userId], () => fetchGetUserById);
};

export default useGetUserById;
