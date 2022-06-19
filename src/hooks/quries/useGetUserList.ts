import { useQuery } from "react-query";
import { fetchGetUserList } from "@api/user";

const useGetUserList = () => {
  return useQuery(["userList"], fetchGetUserList);
};

export default useGetUserList;
