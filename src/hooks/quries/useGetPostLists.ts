import { fechPostListsByChannelsIdList } from "@api/post";
import { useQuery } from "react-query";

const useGetPostListByChannelIdLists = (channelIdList: string[]) => {
  return useQuery(["postLists", channelIdList], () =>
    fechPostListsByChannelsIdList(channelIdList)
  );
};

export default useGetPostListByChannelIdLists;
