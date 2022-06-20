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
  const handleClick = (id: string) => {
    navigate(`/challenges/${id}`);
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
              onClick={() => handleClick(challenge._id)}
            >
              <Card
                type="challange"
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
