import { useEffect, useState } from "react";

import { fetchGetChannelByName, fetchGetChannels } from "@/api/channel";
import { fetchGetPostListByChannel } from "@/api/post";
import Challenges from "@/domain/ChallengesPage/Challenges";
import Chips from "@/domain/ChallengesPage/Chips";
import usePageTitle from "@/hooks/usePageTitle";
import { Channel, Post } from "@/types/index";

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
    window.addEventListener("popstate", windowListener);
    return () => {
      window.removeEventListener("popstate", windowListener);
    };
  }, []);

  useEffect(() => {
    if (selectedChannelId) {
      setShow(false);
      void (async () => {
        const { data, status } = await fetchGetPostListByChannel(
          selectedChannelId
        );
        if (status === 200) {
          setChallenges(data);
          const clickedChannel = channels.filter(
            (item) => item._id === selectedChannelId
          )[0];
          setSelectedChannel(clickedChannel);
        } else alert("다시 시도바랍니다!");
      })();
    }
    setShow(true);
  }, [selectedChannelId]);

  const onClickChips = (event) => {
    const channelDescription = event.target.dataset.description;
    const { _id } = channels.filter(
      (item) => item.description === channelDescription
    )[0];
    setSelectedChannelId(_id);
    history.pushState(null, null, `/challenges/${_id}`);
  };

  const windowListener = () => {
    const clickedChannel = window.location.pathname.split("/")[2];
    setSelectedChannelId(clickedChannel);
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
