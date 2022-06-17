import styled from "@emotion/styled";
import ChakraText from "@base/ChakraText";
import ChakraHeading from "@base/ChakraHeading";
import { Flex } from "@chakra-ui/react";

type ChallengeTitleTypes = {
  startDate: string;
  endDate: string;
  width: number;
  title: string;
  restDay: number;
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ChallengeTitle = ({
  startDate,
  endDate,
  title = "목표 제목",
  restDay = 30,
}: ChallengeTitleTypes) => {
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
      <TitleContainer>
        <ChakraHeading>{title}</ChakraHeading>
        <ChakraHeading>{restDay}일 남았습니다!</ChakraHeading>
      </TitleContainer>
    </Flex>
  );
};

export default ChallengeTitle;
