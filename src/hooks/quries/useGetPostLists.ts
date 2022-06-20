import { useQuery } from "react-query";
import { fechPostListsByChannelsIdList } from "@api/post";

const useGetPostListByChannelIdLists = (channelIdList: string[]) => {
  return useQuery(["postList", channelIdList], () =>
    fechPostListsByChannelsIdList(channelIdList)
  );
};

export default useGetPostListByChannelIdLists;
