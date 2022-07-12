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

  const handleFollowingClick = (tab: "following" | "follower") => {
    navigate(`/follow/${id}`, { state: tab });
  };

  return (
    <UserSummaryContainer>
      <Text padding-top="32px" textAlign="center">
        {introduce}
      </Text>
      <FollowContainer>
        <div>
          <Text
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              handleFollowingClick("follower");
            }}
          >
            {followerCount}
          </Text>
          <div>팔로워</div>
        </div>
        <div>
          <Text
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              handleFollowingClick("following");
            }}
          >
            {followingCount}
          </Text>
          <div>팔로잉</div>
        </div>
      </FollowContainer>
      <div>
        <Link to={`${location.pathname}/edit`}>
          <Button
            width="100%"
            color="white"
            backgroundColor="#ffaa6d"
            marginTop="12px"
            _hover={{ backgroundColor: "#ff7900" }}
          >
            프로필 수정
          </Button>
        </Link>
      </div>
    </UserSummaryContainer>
  );
};

export default MySummary;

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
