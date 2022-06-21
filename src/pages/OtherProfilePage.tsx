import { fetchGetUserById } from "@api/user";
import UserAvatar from "@domain/ProfilePage/UserAvatar";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "src/types";
import OtherSummary from "@domain/ProfilePage/OtherSummary";
import OtherChallenges from "@domain/ProfilePage/OtherChallenges";

const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;

const OtherProfilePage = () => {
  const location = useLocation();
  const userId = location.state as string;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    void (async () => {
      const result = await fetchGetUserById(userId);
      if (result.data) {
        setUser(result.data);
      }
    })();
  }, []);

  console.log(user);

  return (
    user && (
      <>
        <UserInfo>
          <UserAvatar image={user.image} name={user.fullName} />
          <OtherSummary
            introduce={user.coverImage}
            followerCount={user.followers.length}
            followingCount={user.following.length}
          />
        </UserInfo>
        <OtherChallenges challenges={user.posts} />
      </>
    )
  );
};

export default OtherProfilePage;
