import { useEffect, useState } from "react";
import { Channel, Post } from "src/types";
import { fetchGetChannelByName, fetchGetChannels } from "@api/channel";
import { fetchGetPostListByChannel } from "@api/post";
import usePageTitle from "@hooks/usePageTitle";
import Chips from "@domain/ChallengesPage/Chips";
import Challenges from "@domain/ChallengesPage/Challenges";

const ChallengesPage = () => {
  usePageTitle("채널");
  const channelId = window.location.pathname.split("/")[2];
  const [channels, setChannels] = useState<Channel[]>(); // 채널 목록 데이터전체
  const [challenges, setChallenges] = useState<Post[]>(); // 선택된 채널의 포스트 목록
  const [channelName, setChannelName] = useState(""); // 선택된 채널 이름만
  const [selectedChannel, setSelectedChannel] = useState<Channel>(); // 선택된 채널 데이터전체
  const [show, setShow] = useState(false);

  useEffect(() => {
    void (async () => {
      const { data, status } = await fetchGetChannels();
      if (status === 200) {
        setChannels(data);
        setSelectedChannel(
          data.filter((item) => {
            return item._id === channelId;
          })[0]
        );
      } else {
        alert("다시 시도바랍니다!");
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedChannel) {
      setShow(false);
      console.log(selectedChannel);
      setChannelName(selectedChannel.name);
    }
  }, [selectedChannel]);

  useEffect(() => {
    if (channelName) {
      console.log(channelName);
      console.log(channels);
      const { _id: nextChannelId } = channels.filter((item) => {
        return item.name === channelName;
      })[0];
      console.log(nextChannelId);
      void (async (nextChannelId) => {
        const { data, status } = await fetchGetPostListByChannel(nextChannelId);
        status === 200 ? setChallenges(data) : alert("다시 시도바랍니다!");
        setShow(true);
      })(nextChannelId);
    }
  }, [channelName]);

  // useEffect(() => {
  //   void (async () => {
  //     const channelResult = await fetchGetChannelByName(channelName);
  //     if (channelResult.data) {
  //       const channelId = channelResult.data._id;
  //       const challengesResult = await fetchGetPostListByChannel(channelId);
  //       setChallenges(challengesResult.data);
  //     }
  //   })();
  // }, [channels]);

  // useEffect(() => {
  //   void (async () => {
  //     const channelResult = await fetchGetChannelByName(channelName);
  //     if (channelResult.data) {
  //       const channelId = channelResult.data._id;
  //       const challengesResult = await fetchGetPostListByChannel(channelId);
  //       setChallenges(challengesResult.data);
  //     }
  //   })();
  // }, [channelName]);

  return (
    <>
      {show && (
        <>
          <Chips
            names={(channels || []).map((challenge) => challenge.description)}
            setChannelName={setChannelName}
          />
          <Challenges posts={challenges || []} />
        </>
      )}
    </>
  );
};

export default ChallengesPage;
