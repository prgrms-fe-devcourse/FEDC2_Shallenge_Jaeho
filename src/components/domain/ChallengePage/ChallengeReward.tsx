import ChakraHeading from "@base/ChakraHeading";
import ChakraText from "@base/ChakraText";
import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  startDate: string;
  endDate: string;
  reward: string;
  restDay: number;
}

const RewardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ChallengeReward = ({
  startDate,
  endDate,
  reward = "보상 내용",
  restDay = 30,
}: Props) => {
  return (
    <Flex flexDirection="column" maxW="610px" w="100%">
      <Flex justifyContent="space-between" w="100%">
        <ChakraText size="md" color="#8A8A8A">
          {startDate}
        </ChakraText>
        <ChakraText size="md" color="#8A8A8A">
          {endDate}
        </ChakraText>
      </Flex>
      <RewardContainer>
        <ChakraHeading>{reward}</ChakraHeading>
        <ChakraHeading>{restDay}일 남았습니다!</ChakraHeading>
      </RewardContainer>
    </Flex>
  );
};

export default ChallengeReward;
