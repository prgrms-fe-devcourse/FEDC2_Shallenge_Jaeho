import UserAvatar from "@domain/ProfilePage/UserAvatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "src/types";
import OtherSummary from "@domain/ProfilePage/OtherSummary";
import OtherChallenges from "@domain/ProfilePage/OtherChallenges";
import { Flex } from "@chakra-ui/react";
import useGetUserById from "@hooks/quries/useGetUser";

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
            followers={user.followers}
            following={user.following}
            id={user._id}
          />
        </Flex>
        <OtherChallenges challenges={user.posts} />
      </>
    )
  );
};

export default OtherProfilePage;
