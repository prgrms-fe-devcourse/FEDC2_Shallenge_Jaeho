import { useState, useEffect } from "react";

import PageTab from "@domain/FollowPage/FollowPageTab";
import useGetFollowUserList from "@hooks/quries/useGetFollowUserList";
import useGetUserById from "@hooks/quries/useGetUser";
import { useParams } from "react-router-dom";
import { User } from "src/types";

const FollowPage = () => {
  const { userId } = useParams();
  const { data: userData } = useGetUserById(userId);
  const [user, setUser] = useState<User>();
  const [followerList, setFollowerList] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  const followerIdList: string[] =
    user?.followers?.map((follow) => follow.follower) ?? [];
  const followingIdList: string[] =
    user?.following?.map((following) => following.user).filter((id) => id) ??
    [];

  const { data: followerResList } = useGetFollowUserList(followerIdList);
  const { data: followingResList } = useGetFollowUserList(followingIdList);

  useEffect(() => {
    if (followerResList) {
      setFollowerList(followerResList);
    }
  }, [followerResList]);

  useEffect(() => {
    if (followingResList) {
      setFollowingList(followingResList);
    }
  }, [followingResList]);

  return (
    <PageTab
      followingList={followingList}
      followerList={followerList}
    ></PageTab>
  );
};

export default FollowPage;
