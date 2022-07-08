import { fetchGetPostListByChannel } from "@api/post";
import { useQuery } from "react-query";

const useChallenges = (channelId: string) => {
  return useQuery(["challenges", channelId], () =>
    fetchGetPostListByChannel(channelId)
  );
};

export default useChallenges;
