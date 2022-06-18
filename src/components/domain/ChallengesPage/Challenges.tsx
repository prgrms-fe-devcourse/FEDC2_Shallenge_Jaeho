import Card from "@base/Card";
import styled from "@emotion/styled";
import { Post } from "src/types";

interface ChallengesProps {
  channelData: Post[];
}

const CardContainer = styled.div`
  margin-bottom: 12px;
`;

const Challenges = ({ channelData }: ChallengesProps) => {
  console.log(channelData);
  return (
    <>
      {channelData.length == 0 ? (
        <div>챌린지가 없어요!</div>
      ) : (
        channelData.map((challenge) => (
          <CardContainer key={challenge._id}>
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
      {channelData.map((challenge) => (
        <CardContainer key={challenge._id}>
          <Card
            type="challange"
            heading={challenge.title.title}
            text={challenge.title.reward}
            commentCount={challenge.comments.length}
            cheerCount={challenge.likes.length}
          ></Card>
        </CardContainer>
      ))}
      {channelData.map((challenge) => (
        <CardContainer key={challenge._id}>
          <Card
            type="challange"
            heading={challenge.title.title}
            text={challenge.title.reward}
            commentCount={challenge.comments.length}
            cheerCount={challenge.likes.length}
          ></Card>
        </CardContainer>
      ))}
    </>
  );
};

export default Challenges;
