import UserAvatar from "@domain/ProfilePage/UserAvatar";
import MyChallenges from "@domain/ProfilePage/MyChallenges";
import UserSummary from "@domain/ProfilePage/MySummary";
import styled from "@emotion/styled";
import userAtom from "@store/user";
import { useAtom } from "jotai";

const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;

const MyProfilePage = () => {
  const [myUser] = useAtom(userAtom);

  return (
    <>
      <UserInfo>
        <UserAvatar image={myUser.image} name={myUser.fullName} />
        <UserSummary
          introduce={myUser.coverImage}
          followerCount={myUser.followers.length}
          followingCount={myUser.following.length}
        />
      </UserInfo>
      <MyChallenges challenges={myUser.posts} />
    </>
  );
};

export default MyProfilePage;
