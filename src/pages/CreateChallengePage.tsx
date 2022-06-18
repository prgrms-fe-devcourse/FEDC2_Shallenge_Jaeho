import ChakraInput from "@base/ChakraInput";
import { Button, Flex, Heading } from "@chakra-ui/react";
import ChallengeChannelRadio from "@domain/CreateChallengePage/ChallengeChannelRadio";
import TextLayout from "@layout/TextLayout";

const CreateChallengePage = () => {
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
          ></ChakraInput>
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">🗂 채널</Heading>
          <ChallengeChannelRadio />
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">📆 시작일</Heading>
          <ChakraInput
            placeholder="시작일을 선택해주세요 \(*°▽°*)/"
            variant="outline"
            width="100%"
          ></ChakraInput>
        </Flex>
        <Flex direction="column" gap="16px">
          <Heading size="xl">🏁 보상</Heading>
          <ChakraInput
            placeholder="평소 원하는 것을 입력해주세요 ( $ _ $ )"
            variant="outline"
            width="100%"
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
