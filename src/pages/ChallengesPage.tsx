import { useEffect, useState } from "react";
import { Channel, Post } from "src/types";
import usePageTitle from "@hooks/usePageTitle";
import Chips from "@domain/ChallengesPage/Chips";
import Challenges from "@domain/ChallengesPage/Challenges";
import useChannels from "@hooks/quries/useChannels";
import useChallenges from "@hooks/quries/useChallenges";

const ChallengesPage = () => {
  usePageTitle("채널");
  const [selectedChannelId, setSelectedChannelId] = useState(
    window.location.pathname.split("/")[2]
  );
  const { data: channelsData } = useChannels();
  const { data: challengesData } = useChallenges(selectedChannelId);
  const [channels, setChannels] = useState<Channel[]>(); // 채널 목록 데이터전체
  const [challenges, setChallenges] = useState<Post[]>(); // 선택된 채널의 포스트 목록
  const [selectedChannel, setSelectedChannel] = useState<Channel>(); // 선택된 채널 데이터전체

  const windowListener = () => {
    const clickedChannel = window.location.pathname.split("/")[2];
    setSelectedChannelId(clickedChannel);
  };

  useEffect(() => {
    setChannels(channelsData);

    window.addEventListener("popstate", windowListener);
    return () => {
      window.removeEventListener("popstate", windowListener);
    };
  }, [channelsData]);

  useEffect(() => {
    setChallenges(challengesData);
  }, [challengesData]);

  useEffect(() => {
    setChallenges(challengesData);
    const clickedChannel = channels?.filter(
      (item) => item._id === selectedChannelId
    )[0];
    setSelectedChannel(clickedChannel);
  }, [selectedChannelId]);

  const onClickChips = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const channelDescription = target.dataset.description;
    const { _id } = channels.filter(
      (item) => item.description === channelDescription
    )[0];
    setSelectedChannelId(_id);
    history.pushState(null, null, `/challenges/${_id}`);
  };

  return (
    <>
      <Chips
        names={(channels || []).map((challenge) => challenge.description)}
        selectedChip={selectedChannel?.description || "독서"}
        onClickProp={onClickChips}
      />
      <Challenges posts={challenges || []} />
    </>
  );
};

export default ChallengesPage;
