import { useState } from "react";
import { channelsData, channelData } from "@domain/ChallengesPage/dummy";
import Chips from "@domain/ChallengesPage/Chips";
import Challenges from "@domain/ChallengesPage/Challenges";

// console.log(channelsData); // channels 데이터 가져오기

const ChallengesPage = () => {
  const [channels, setChannels] = useState(channelsData); // 데이터 가져오면 setState 하기
  const [channelName, setChannelName] = useState(channelsData[0].name); // channelName 기본값 처음에 사용, 채널 바뀌면 다시 데이터 요청

  // ~~//challenges//[name]으로 접속
  // name을 처음에 알아내서 데이터 요청
  // name으로 요청한 결과에 대해 에러가 있으면 404

  return (
    <>
      <Chips
        names={channels.map((challenge) => challenge.name)}
        setChannelName={setChannelName}
      />
      <Challenges channelData={channelData.posts} />
    </>
  );
};

export default ChallengesPage;
