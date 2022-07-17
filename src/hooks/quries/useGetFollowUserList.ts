import { fetchGetFollowUserList } from "@api/user";
import { useQuery } from "react-query";

const useGetFollowUserList = (followUserIdList: string[]) => {
  return useQuery(["followUserList", followUserIdList], () =>
    fetchGetFollowUserList(followUserIdList)
  );
};

export default useGetFollowUserList;
