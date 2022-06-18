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
  return (
    <>
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
