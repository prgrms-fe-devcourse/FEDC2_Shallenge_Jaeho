import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  introduce: string;
  followerCount: number;
  followingCount: number;
  id: string;
}

const MySummary = ({ introduce, followerCount, followingCount, id }: Props) => {
  const navigate = useNavigate();

  const handleFollowingClick = () => {
    navigate(`/follow/${id}`);
  };

  return (
    <UserSummaryContainer>
      <IntroduceText textAlign="center">{introduce}</IntroduceText>
      <FollowContainer>
        <div>
          <Text onClick={handleFollowingClick}>{followerCount}</Text>
          <div>팔로워</div>
        </div>
        <div>
          <Text onClick={handleFollowingClick}>{followingCount}</Text>
          <div>팔로잉</div>
        </div>
      </FollowContainer>
      <div>
        <Link to={`${location.pathname}/edit`}>
          <CButton>프로필 수정</CButton>
        </Link>
      </div>
    </UserSummaryContainer>
  );
};

export default MySummary;

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
