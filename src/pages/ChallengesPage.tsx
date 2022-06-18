import { useState } from "react";
import { channelsData, channelData } from "@domain/ChallengesPage/dummy";
import Chips from "@domain/ChallengesPage/Chips";

console.log(channelsData);
console.log(channelData);

const ChallengesPage = () => {
  const [channelName, setChannelName] = useState(channelsData[0].name);
  console.log(channelName);

  return (
    <>
      <Chips
        names={channelsData.map((challenge) => challenge.name)}
        setChannelName={setChannelName}
      />
    </>
  );
};

export default ChallengesPage;
