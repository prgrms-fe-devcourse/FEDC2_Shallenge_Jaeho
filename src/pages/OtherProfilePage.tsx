import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import { fetchGetUserById } from "@/api/user";
import OtherChallenges from "@/domain/ProfilePage/OtherChallenges";
import OtherSummary from "@/domain/ProfilePage/OtherSummary";
import UserAvatar from "@/domain/ProfilePage/UserAvatar";
import { User } from "@/types/index";

const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;

const OtherProfilePage = () => {
  const location = useLocation();
  console.log(location);
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

  return (
    user && (
      <>
        <UserInfo>
          <UserAvatar image={user.image} name={user.fullName} />
          <OtherSummary
            introduce={user.coverImage}
            followerCount={user.followers.length}
            followingCount={user.following.length}
            id={user._id}
          />
        </UserInfo>
        <OtherChallenges challenges={user.posts} />
      </>
    )
  );
};

export default OtherProfilePage;
