import styled from "@emotion/styled";
import ChakraText from "@base/ChakraText";
import ChakraHeading from "@base/ChakraHeading";

type ChallengeTitleTypes = {
  startDate: string;
  endDate: string;
  width: number;
  title: string;
  restDay: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 610px;
  width: 100%;
`;

const DateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

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
    <Container>
      <DateContainer>
        <ChakraText size="md" color="#8A8A8A">
          {startDate}
        </ChakraText>
        <ChakraText size="md" color="#8A8A8A">
          {endDate}
        </ChakraText>
      </DateContainer>
      <TitleContainer>
        <ChakraHeading>{title}</ChakraHeading>
        <ChakraHeading>{restDay}일 남았습니다!</ChakraHeading>
      </TitleContainer>
    </Container>
  );
};

export default ChallengeTitle;
