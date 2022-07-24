import { useQuery } from "react-query";

import { fetchGetPostListByChannel } from "@/api/post";

const useChallenges = (channelId: string) => {
  return useQuery(["challenges", channelId], () =>
    fetchGetPostListByChannel(channelId)
  );
};

export default useChallenges;
