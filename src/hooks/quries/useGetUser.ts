import { useQuery } from "react-query";
import { fetchGetUserById } from "@api/user";
import { User } from "src/types";

const useGetUserById = (userId: string) => {
  return useQuery<User, Error>(["user", userId], () =>
    fetchGetUserById(userId)
  );
};

export default useGetUserById;
