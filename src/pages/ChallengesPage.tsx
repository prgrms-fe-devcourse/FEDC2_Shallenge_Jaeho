import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Challenges from "@/domain/ChallengesPage/Challenges";
import Chips from "@/domain/ChallengesPage/Chips";
import useChallenges from "@/hooks/quries/useChallenges";
import useChannels from "@/hooks/quries/useChannels";
import usePageTitle from "@/hooks/usePageTitle";
import { Channel } from "src/types";

const ChallengesPage = () => {
  usePageTitle("채널");
  const navigate = useNavigate();
  const { channelId } = useParams();
  const { data: channelsData } = useChannels(); // 채널 목록 데이터전체
  const { data: challengesData } = useChallenges(channelId); // 선택된 채널의 포스트 목록
  const [selectedChannel, setSelectedChannel] = useState<Channel>(); // 선택된 채널 데이터전체

  useEffect(() => {
    setSelectedChannel(
      channelsData?.filter((item: Channel) => item._id === channelId)[0]
    );
  }, [channelsData]);

  useEffect(() => {
    const clickedChannel = channelsData?.filter(
      (item) => item._id === channelId
    )[0];
    setSelectedChannel(clickedChannel);
  }, [channelId]);

  const onClickChips = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const channelDescription = target.dataset.description;
    const { _id } = channelsData.filter(
      (item) => item.description === channelDescription
    )[0];
    navigate(`/challenges/${_id}`);
  };

  return (
    <>
      <Chips
        names={(channelsData || []).map((challenge) => challenge.description)}
        selectedChip={selectedChannel?.description || "독서"}
        onClickProp={onClickChips}
      />
      <Challenges posts={challengesData || []} />
    </>
  );
};

export default ChallengesPage;
