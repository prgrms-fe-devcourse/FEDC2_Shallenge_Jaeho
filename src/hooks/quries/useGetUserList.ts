import { fetchGetUserList } from "@api/user";
import { useQuery } from "react-query";
import { User } from "src/types";

const useGetUserList = () => {
  return useQuery<User[], Error>(["userList"], fetchGetUserList);
};

export default useGetUserList;
