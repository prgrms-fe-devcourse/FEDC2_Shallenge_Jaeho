import { fetchGetOnlineUserList } from "@api/user";
import { useQuery } from "react-query";

const useGetOnlineUserList = () => {
  return useQuery(["onlineUserList"], fetchGetOnlineUserList);
};

export default useGetOnlineUserList;
