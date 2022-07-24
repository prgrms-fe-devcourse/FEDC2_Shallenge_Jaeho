import { useEffect, useState } from "react";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { fetchPostPostByChannelId } from "@/api/post";
import ChakraInput from "@/base/ChakraInput";
import ChallengeChannelRadio from "@/domain/CreateChallengePage/ChallengeChannelRadio";
import StartDateCalendar from "@/domain/CreateChallengePage/StartDateCalendar";
import useGetChannelList from "@/hooks/quries/useGetChannelList";
import usePageTitle from "@/hooks/usePageTitle";

const challengeTable = Array.from({ length: 30 }, (_, index) => ({
  day: index,
  isChecked: false,
}));

const CreateChallengePage = () => {
  const navigate = useNavigate();
  usePageTitle("30일 챌린지 만들기");

  const [challengeTitle, setChallengeTitle] = useState("");
  const [channel, setChannel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [reward, setReward] = useState("");

  const { data: channelList } = useGetChannelList();
  useEffect(() => {
    setChannel(channelList?.[0]._id);
  }, [channelList]);

  const onChallengeTitleChange = (newChallengeTitle: string) => {
    setChallengeTitle(newChallengeTitle.trim());
  };
  const onChannelChange = (newChannel: string) => {
    const channelId = channelList.filter(({ description }) => {
      return description === newChannel;
    })[0]._id;
    setChannel(channelId);
  };
  const onStartDateChange = (newStartDate: string) => {
    setStartDate(newStartDate);
  };
  const onRewardChange = (newReward: string) => {
    setReward(newReward.trim());
  };

  const checkForm = () => {
    if (challengeTitle === "") return false;
    if (reward === "") return false;
    return true;
  };

  const onSubmitEvent = () => {
    if (checkForm()) {
      const newChallenge = {
        challengeTitle: challengeTitle,
        reward,
        days: challengeTable,
        startDate: startDate,
      };
      void submitChallengeForm(newChallenge);
    }
  };

  const submitChallengeForm = async (newChallenge: {
    challengeTitle: string;
    reward: string;
    days: {
      day: number;
      isChecked: boolean;
    }[];
    startDate: string;
  }) => {
    const { status } = await fetchPostPostByChannelId({
      title: JSON.stringify(newChallenge),
      image: null,
      channelId: channel,
    });
    if (status === 200) {
      navigate("/my/profile");
    } else {
      alert("다시 시도바랍니다.");
    }
  };

  return (
    <Flex
      margin="40px 0px"
      direction="column"
      gap="56px"
      padding="40px"
      w="100%"
      bg="#FFFFFF"
      borderRadius="15px"
    >
      <Flex direction="column" gap="16px">
        <Heading size="xl">🎯 목표</Heading>
        <ChakraInput
          placeholder="목표를 작성해주세요 \(@^0^@)/"
          variant="outline"
          width="100%"
          onChangeValue={onChallengeTitleChange}
        ></ChakraInput>
      </Flex>
      <Flex direction="column" gap="16px">
        <Heading size="xl">🗂 채널</Heading>
        {channelList && (
          <ChallengeChannelRadio
            onChangeValue={onChannelChange}
            channelList={channelList.map((channel) => {
              return channel.description;
            })}
          />
        )}
      </Flex>
      <Flex direction="column" gap="16px">
        <Heading size="xl">📆 시작일</Heading>
        <StartDateCalendar onChangeValue={onStartDateChange} />
      </Flex>
      <Flex direction="column" gap="16px">
        <Heading size="xl">🏁 보상</Heading>
        <ChakraInput
          placeholder="평소 원하는 것을 입력해주세요 ( $ _ $ )"
          variant="outline"
          width="100%"
          onChangeValue={onRewardChange}
        ></ChakraInput>
      </Flex>
      <Flex justifyContent="center">
        <Button
          isDisabled={!checkForm()}
          size="lg"
          bg="#FFAA6D"
          w="240px"
          marginTop="20px"
          color="#FFFFFF"
          _hover={checkForm() ? { bg: "#FF7900" } : { bg: "#FFAA6D" }}
          onClick={onSubmitEvent}
        >
          생성하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateChallengePage;
