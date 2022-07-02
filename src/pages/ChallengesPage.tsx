import { useEffect, useState } from "react";

import { fetchGetChannelByName, fetchGetChannels } from "@/api/channel";
import { fetchGetPostListByChannel } from "@/api/post";
import Challenges from "@/domain/ChallengesPage/Challenges";
import Chips from "@/domain/ChallengesPage/Chips";
import usePageTitle from "@/hooks/usePageTitle";
import { Channel, Post } from "@/types/index";

const ChallengesPage = () => {
  usePageTitle("채널");
  const [channels, setChannels] = useState<Channel[]>();
  const [challenges, setChallenges] = useState<Post[]>();
  const [channelName, setChannelName] = useState("📖 독서");

  useEffect(() => {
    void (async () => {
      const result = await fetchGetChannels();
      if (result.data) {
        setChannels(result.data);
      }
    })();
  }, []);

  useEffect(() => {
    void (async () => {
      const channelResult = await fetchGetChannelByName(channelName);
      if (channelResult.data) {
        const channelId = channelResult.data._id;
        const challengesResult = await fetchGetPostListByChannel(channelId);
        console.log(challengesResult.data);
        setChallenges(challengesResult.data);
      }
    })();
  }, [channelName]);

  return (
    <>
      <Chips
        names={(channels || []).map((challenge) => challenge.name)}
        setChannelName={setChannelName}
      />
      <Challenges posts={challenges || []} />
    </>
  );
};

export default ChallengesPage;
