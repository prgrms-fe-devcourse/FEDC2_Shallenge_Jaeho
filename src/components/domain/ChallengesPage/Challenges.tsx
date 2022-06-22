import Card from "@base/Card";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Post } from "src/types";

interface ChallengesProps {
  posts: Post[];
}

const CardContainer = styled.div`
  margin-bottom: 12px;
  cursor: pointer;
`;

const Challenges = ({ posts }: ChallengesProps) => {
  const navigate = useNavigate();
  const handleClick = (channelId: string, challengeId: string) => {
    navigate(`/challenges/${channelId}/${challengeId}`);
  };

  return (
    <>
      {posts.length == 0 ? (
        <div>챌린지가 없어요!</div>
      ) : (
        posts.map((challenge) => {
          const jsonString = challenge.title.replaceAll("'", '"');
          const jsonObject = JSON.parse(jsonString);
          return (
            <CardContainer
              key={challenge._id}
              onClick={() => handleClick(challenge.channel._id, challenge._id)}
            >
              <Card
                type="challenge"
                heading={jsonObject.challengeTitle}
                text={jsonObject.reward}
                commentCount={challenge.comments.length}
                cheerCount={challenge.likes.length}
              ></Card>
            </CardContainer>
          );
        })
      )}
    </>
  );
};

export default Challenges;
