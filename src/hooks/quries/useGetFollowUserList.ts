import { useQuery } from "react-query";
import { fetchGetFollowUserList } from "@api/user";
const useGetFollowUserList = (followUserIdList: string[]) => {
  return useQuery(["followUserList", followUserIdList], () =>
    fetchGetFollowUserList(followUserIdList)
  );
};

export default useGetFollowUserList;
