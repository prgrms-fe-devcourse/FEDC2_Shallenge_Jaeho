import { fetchPostFollowByUserId } from "@api/follow";
import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface UserSummaryProps {
  introduce: string;
  followerCount: number;
  followingCount: number;
  id: string;
}

const IntroduceText = styled(Text)`
  padding-top: 32px;
`;

const UserSummaryContainer = styled.div`
  width: 50%;
  display: block;
  text-align: center;
`;

const FollowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;

  & p {
    font-weight: 700;
  }
`;

const CButton = styled(Button)`
  width: 100%;
  color: white;
  background-color: #ffaa6d;
  margin-top: 12px;

  &:hover {
    background-color: #ff7900;
  }
`;

const OtherSummary = ({
  introduce,
  followerCount,
  followingCount,
  id,
}: UserSummaryProps) => {
  const navigate = useNavigate();

  const handleFollowingClick = () => {
    navigate(`/follow/${id}`);
  };

  const handleFollowClick = () => {
    void (async () => {
      await fetchPostFollowByUserId(id);
    })();
  };

  return (
    <UserSummaryContainer>
      <IntroduceText textAlign="center">{introduce}</IntroduceText>
      <FollowContainer>
        <div>
          <Text cursor="pointer" onClick={handleFollowingClick}>
            {followerCount}
          </Text>
          <div>팔로워</div>
        </div>
        <div>
          <Text cursor="pointer" onClick={handleFollowingClick}>
            {followingCount}
          </Text>
          <div>팔로잉</div>
        </div>
      </FollowContainer>
      <div>
        <CButton onClick={handleFollowClick}>팔로우</CButton>
      </div>
    </UserSummaryContainer>
  );
};

export default OtherSummary;
