import { useEffect, useState } from "react";

import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Follow } from "src/types";

import {
  fetchDeleteFollowByUserId,
  fetchPostFollowByUserId,
} from "@/api/follow";
import userAtom from "@/store/user";

interface Props {
  introduce: string;
  followers: Follow[];
  following: Follow[];
  id: string;
}

const OtherSummary = ({ introduce, followers, following, id }: Props) => {
  const navigate = useNavigate();
  const [me] = useAtom(userAtom);
  const [followerList, setFollowerList] = useState(followers);

  const [isFollowing, setIsFollowing] = useState(false);
  const { mutate: createFollowMutate } = useMutation(fetchPostFollowByUserId, {
    onSuccess: (data) => {
      setFollowerList((state) => [...state, data]);
    },
  });
  const { mutate: deleteFollowMutate } = useMutation(
    fetchDeleteFollowByUserId,
    {
      onSuccess: (data) => {
        setFollowerList((state) =>
          state.filter((item) => item._id !== data._id)
        );
      },
    }
  );

  useEffect(() => {
    followerList.forEach(({ follower }) => {
      if (follower === me._id) {
        setIsFollowing(true);
      }
    });
  }, []);

  const handleFollowCountClick = () => {
    navigate(`/follow/${id}`);
  };

  const handleFollowButtonClick = () => {
    // 팔로잉 중일 때
    if (isFollowing === true) {
      if (confirm("팔로잉을 취소하실래요?")) {
        followerList.forEach((item) => {
          if (item.follower === me._id) {
            setIsFollowing(false);
            deleteFollowMutate(item._id);
          }
        });
      }
      return;
    }

    // 팔로잉 중이지 않을 때
    setIsFollowing(true);
    createFollowMutate(id);
  };

  return (
    <UserSummaryContainer>
      <Text marginTop="32px" textAlign="center">
        {introduce}
      </Text>
      <FollowContainer>
        <div>
          <Text cursor="pointer" onClick={handleFollowCountClick}>
            {followerList.length}
          </Text>
          <div>팔로워</div>
        </div>
        <div>
          <Text cursor="pointer" onClick={handleFollowCountClick}>
            {following.length}
          </Text>
          <div>팔로잉</div>
        </div>
      </FollowContainer>
      <div>
        <Button
          width="100%"
          color="white"
          bgColor="#ffaa6d"
          marginTop="12px"
          onClick={handleFollowButtonClick}
          _hover={{ bgColor: "#ff7900" }}
        >
          {isFollowing ? "팔로잉 중" : "팔로우 하기"}
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
