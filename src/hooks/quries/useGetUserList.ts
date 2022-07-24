import { useQuery } from "react-query";
import { User } from "src/types";

import { fetchGetUserList } from "@/api/user";

const useGetUserList = () => {
  return useQuery<User[], Error>(["userList"], fetchGetUserList);
};

export default useGetUserList;
