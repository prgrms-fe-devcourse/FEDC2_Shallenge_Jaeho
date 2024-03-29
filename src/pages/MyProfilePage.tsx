import styled from "@emotion/styled";
import { useAtom } from "jotai";

import MyChallenges from "@/domain/ProfilePage/MyChallenges";
import MySummary from "@/domain/ProfilePage/MySummary";
import UserAvatar from "@/domain/ProfilePage/UserAvatar";
import usePageTitle from "@/hooks/usePageTitle";
import userAtom from "@/store/user";

const MyProfilePage = () => {
  const [myUser] = useAtom(userAtom);
  usePageTitle(myUser.fullName);

  return (
    <>
      <UserInfo>
        <UserAvatar image={myUser.image} name={myUser.fullName} />
        <MySummary
          introduce={myUser.coverImage}
          followerCount={myUser.followers.length}
          followingCount={myUser.following.length}
          id={myUser._id}
        />
      </UserInfo>
      <MyChallenges challenges={myUser.posts} />
    </>
  );
};

export default MyProfilePage;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;
