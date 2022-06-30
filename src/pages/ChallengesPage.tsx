import { useEffect, useState } from "react";
import { Channel, Post } from "src/types";
import { fetchGetChannelByName, fetchGetChannels } from "@api/channel";
import { fetchGetPostListByChannel } from "@api/post";
import usePageTitle from "@hooks/usePageTitle";
import Chips from "@domain/ChallengesPage/Chips";
import Challenges from "@domain/ChallengesPage/Challenges";

const ChallengesPage = () => {
  usePageTitle("채널");
  const [selectedChannelId, setSelectedChannelId] = useState(
    window.location.pathname.split("/")[2]
  );
  const [channels, setChannels] = useState<Channel[]>(); // 채널 목록 데이터전체
  const [challenges, setChallenges] = useState<Post[]>(); // 선택된 채널의 포스트 목록
  const [selectedChannel, setSelectedChannel] = useState<Channel>(); // 선택된 채널 데이터전체
  const [show, setShow] = useState(false);

  useEffect(() => {
    void (async () => {
      const { data, status } = await fetchGetChannels();
      if (status === 200) {
        setChannels(data);
        setSelectedChannel(
          data.filter((item) => item._id === selectedChannelId)[0]
        );
      } else {
        alert("다시 시도바랍니다!");
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedChannelId) {
      setShow(false);
      void (async () => {
        const { data, status } = await fetchGetPostListByChannel(
          selectedChannelId
        );
        if (status === 200) setChallenges(data);
        else alert("다시 시도바랍니다!");
      })();
    }
    setShow(true);
  }, [selectedChannelId]);

  const onClickChips = (event) => {
    const channelDescription = event.target.dataset.description;
    const clickedChannel = channels.filter(
      (item) => item.description === channelDescription
    )[0];
    setSelectedChannelId(clickedChannel._id);
    setSelectedChannel(clickedChannel);
    const path = `/challenges/${clickedChannel._id}`;
    history.pushState(null, null, path);
  };

  return (
    <>
      {show && (
        <>
          <Chips
            names={(channels || []).map((challenge) => challenge.description)}
            selectedChip={selectedChannel?.description}
            onClickProp={onClickChips}
          />
          <Challenges posts={challenges || []} />
        </>
      )}
    </>
  );
};

export default ChallengesPage;
