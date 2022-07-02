import { useQuery } from "react-query";

import { fetchGetOnlineUserList } from "@/api/user";

const useGetOnlineUserList = () => {
  return useQuery(["onlineUserList"], fetchGetOnlineUserList);
};

export default useGetOnlineUserList;
