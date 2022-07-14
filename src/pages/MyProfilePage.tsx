import styled from "@emotion/styled";
import { useAtom } from "jotai";
import UserAvatar from "@domain/ProfilePage/UserAvatar";
import MyChallenges from "@domain/ProfilePage/MyChallenges";
import MySummary from "@domain/ProfilePage/MySummary";
import userAtom from "@store/user";
import usePageTitle from "@hooks/usePageTitle";
import { Flex } from "@chakra-ui/react";

const MyProfilePage = () => {
  const [myUser] = useAtom(userAtom);
  usePageTitle(myUser.fullName);

  return (
    <>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        marginTop="32px"
        position="relative"
      >
        <UserAvatar image={myUser.image} name={myUser.fullName} />
        <MySummary
          introduce={myUser.coverImage}
          followerCount={myUser.followers.length}
          followingCount={myUser.following.length}
          id={myUser._id}
        />
      </Flex>
      <MyChallenges challenges={myUser.posts} />
    </>
  );
};

export default MyProfilePage;
