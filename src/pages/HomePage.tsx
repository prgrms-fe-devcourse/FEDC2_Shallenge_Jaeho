import { Heading, Text, Flex } from "@chakra-ui/layout";
import Card from "@base/Card";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const MoreText = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`;

const dummyData = [{}, {}, {}, {}, {}, {}, {}, {}];

const HomePage = () => {
  const navigate = useNavigate();
  const onClickMore = (channelId: string): void => {
    navigate(`challenge/${channelId}`);
  };

  return (
    <>
      <Flex paddingTop="48px" justifyContent="space-between">
        <Heading size="xl">💪운동</Heading>
        <MoreText
          size="sm"
          color="#ff7900"
          alignSelf={"end"}
          onClick={() => {
            onClickMore("1");
          }}
        >
          more{">"}
        </MoreText>
      </Flex>
      {dummyData.slice(0, 2).map((challange) => {
        return (
          <Card
            type="challange"
            heading="헬스장에서 30분 이상 운동"
            text="가지고 싶었던 운동화 구입"
            commentCount={12}
            cheerCount={23}
            margin="16px 0"
          ></Card>
        );
      })}
    </>
  );
};

export default HomePage;
