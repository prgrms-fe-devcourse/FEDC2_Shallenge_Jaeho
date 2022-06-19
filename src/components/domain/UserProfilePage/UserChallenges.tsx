import Card from "@base/Card";
import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Post } from "src/types";

interface UserChallengesProps {
  challenges: Post[];
}

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

const UserChallenges = ({ challenges }: UserChallengesProps) => {
  console.log(challenges);
  const handleChallengeClick = (id: string) => {
    // challenge 아이디를 통해 이동
    console.log(id);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/challenges/create");
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
        <div>챌린지가 없어요!</div>
      ) : (
        challenges.map((challenge) => (
          <CardContainer
            key={challenge._id}
            onClick={() => handleChallengeClick(challenge._id)}
          >
            <Card
              type="challange"
              heading={challenge.title.title}
              text={challenge.title.reward}
              commentCount={challenge.comments.length}
              cheerCount={challenge.likes.length}
            ></Card>
          </CardContainer>
        ))
      )}
    </UserChallengesContainer>
  );
};

export default UserChallenges;
