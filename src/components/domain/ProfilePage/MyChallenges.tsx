import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Post } from "src/types";

import Card from "@/base/Card";

interface Props {
  challenges: Post[];
}

const MyChallenges = ({ challenges }: Props) => {
  const handleChallengeClick = (channelId: string, challengeId: string) => {
    navigate(`/challenges/${channelId}/${challengeId}`);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/my/challenge/create");
  };

  return (
    <UserChallengesContainer>
      <Flex>
        <Heading size="xl">🎯챌린지</Heading>
        <Spacer />
        <CButton size="sm" onClick={handleButtonClick}>
          +
        </CButton>
      </Flex>
      {challenges.length == 0 ? (
        <Text>챌린지가 없어요!</Text>
      ) : (
        challenges.map((challenge) => {
          const jsonString = challenge.title.replaceAll("'", '"');
          const jsonObject = JSON.parse(jsonString);
          return (
            <CardContainer
              key={challenge._id}
              onClick={() => {
                handleChallengeClick(
                  challenge.channel as unknown as string,
                  challenge._id
                );
              }}
            >
              <Card
                type="challenge"
                heading={jsonObject.challengeTitle}
                text={jsonObject.reward}
                userInfo={false}
                commentCount={challenge.comments.length}
                cheerCount={challenge.likes.length}
              ></Card>
            </CardContainer>
          );
        })
      )}
    </UserChallengesContainer>
  );
};

export default MyChallenges;

const UserChallengesContainer = styled.div`
  margin-top: 56px;
  z-index: 1;
  position: relative;
`;

const CardContainer = styled.div`
  margin: 12px 0;
  cursor: pointer;
`;

const CButton = styled(Button)`
  color: white;
  background-color: #ffaa6d;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: #ff7900;
  }
`;

const Text = styled.div`
  text-align: center;
`;
