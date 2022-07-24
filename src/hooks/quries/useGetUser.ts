import { useQuery } from "react-query";
import { User } from "src/types";

import { fetchGetUserById } from "@/api/user";

const useGetUserById = (userId: string) => {
  return useQuery<User, Error>(["user", userId], () =>
    fetchGetUserById(userId)
  );
};

export default useGetUserById;
