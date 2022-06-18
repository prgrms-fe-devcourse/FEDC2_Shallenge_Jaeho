import { Button, Flex, Heading } from "@chakra-ui/react";
import ChakraInput from "@base/ChakraInput";
import ChallengeChannelRadio from "@domain/CreateChallengePage/ChallengeChannelRadio";
import TextLayout from "@layout/TextLayout";
import { useEffect, useState } from "react";
import StartDateCalendar from "@domain/CreateChallengePage/StartDateCalendar";

const CreateChallengePage = () => {
  const [challengeTitle, setChallengeTitle] = useState("");
  const [channel, setChannel] = useState("운동");
  const [startDate, setStartDate] = useState("");
  const [reward, setReward] = useState("");

  useEffect(() => {
    console.log(challengeTitle, channel, startDate, reward);
  }, [challengeTitle, channel, startDate, reward]);

  const onChallengeTitle = (newChallengeTitle: string) => {
    setChallengeTitle(newChallengeTitle);
  };
  const onChannel = (newChannel: string) => {
    setChannel(newChannel);
  };
  const onStartDate = (newStartDate: string) => {
    setStartDate(newStartDate);
  };
  const onReward = (newReward: string) => {
    setReward(newReward);
  };

  return (
    <TextLayout text="30일 챌린지 만들기">
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
            onChangeValue={onChallengeTitle}
          >
            {challengeTitle}
          </ChakraInput>
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">🗂 채널</Heading>
          <ChallengeChannelRadio onChangeValue={onChannel} />
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">📆 시작일</Heading>
          <StartDateCalendar onChangeValue={onStartDate} />
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">🏁 보상</Heading>
          <ChakraInput
            placeholder="평소 원하는 것을 입력해주세요 ( $ _ $ )"
            variant="outline"
            width="100%"
            onChangeValue={onReward}
          ></ChakraInput>
        </Flex>
        <Flex justifyContent="center">
          <Button
            size="lg"
            bg="#FFAA6D"
            w="240px"
            marginTop="20px"
            color="#FFFFFF"
            _hover={{ bg: "#FF7900" }}
          >
            생성하기
          </Button>
        </Flex>
      </Flex>
    </TextLayout>
  );
};

export default CreateChallengePage;
