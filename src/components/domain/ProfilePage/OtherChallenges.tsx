import { Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Card from "@/base/Card";
import { Post } from "src/types";

interface Props {
  challenges: Post[];
}

const OtherChallenges = ({ challenges }: Props) => {
  const handleChallengeClick = (channelId: string, challengeId: string) => {
    navigate(`/challenges/${channelId}/${challengeId}`);
  };
  const navigate = useNavigate();

  return (
    <UserChallengesContainer>
      <Flex>
        <Heading size="xl">🎯챌린지</Heading>
        <Spacer />
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
              onClick={() =>
                handleChallengeClick(challenge.channel._id, challenge._id)
              }
            >
              <Card
                type="challenge"
                userInfo={false}
                heading={jsonObject.challengeTitle}
                text={jsonObject.reward}
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

export default OtherChallenges;

const UserChallengesContainer = styled.div`
  margin-top: 56px;
  z-index: 1;
  position: relative;
`;

const CardContainer = styled.div`
  margin: 12px 0;
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
`;
