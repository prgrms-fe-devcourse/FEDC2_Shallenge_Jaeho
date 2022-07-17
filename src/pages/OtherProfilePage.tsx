import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import OtherChallenges from "@domain/ProfilePage/OtherChallenges";
import OtherSummary from "@domain/ProfilePage/OtherSummary";
import UserAvatar from "@domain/ProfilePage/UserAvatar";
import useGetUserById from "@hooks/quries/useGetUser";
import { useParams } from "react-router-dom";
import { User } from "src/types";

const OtherProfilePage = () => {
  const { userId } = useParams();
  const { data } = useGetUserById(userId);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(data);
  }, [data]);

  return (
    user && (
      <>
        <Flex justifyContent="space-evenly" alignItems="center" marginTop={8}>
          <UserAvatar image={user.image} name={user.fullName} />
          <OtherSummary
            introduce={user.coverImage}
            followerCount={user.followers.length}
            followingCount={user.following.length}
            id={user._id}
          />
        </Flex>
        <OtherChallenges challenges={user.posts} />
      </>
    )
  );
};

export default OtherProfilePage;
