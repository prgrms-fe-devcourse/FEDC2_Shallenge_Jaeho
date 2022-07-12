import { fetchPostFollowByUserId } from "@api/follow";
import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface Props {
  introduce: string;
  followerCount: number;
  followingCount: number;
  id: string;
}

const OtherSummary = ({
  introduce,
  followerCount,
  followingCount,
  id,
}: Props) => {
  const navigate = useNavigate();

  const handleFollowingClick = (tab: "follower" | "following") => {
    navigate(`/follow/${id}`, { state: tab });
  };

  const handleFollowClick = () => {
    void (async () => {
      await fetchPostFollowByUserId(id);
    })();
  };

  return (
    <UserSummaryContainer>
      <Text textAlign="center" padding-top="32px">
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
        <Button
          width="100%"
          color="white"
          backgroundColor="#ffaa6d"
          marginTop="12px"
          _hover={{ backgroundColor: "#ff7900" }}
          onClick={handleFollowClick}
        >
          팔로우
        </Button>
      </div>
    </UserSummaryContainer>
  );
};

export default OtherSummary;

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
