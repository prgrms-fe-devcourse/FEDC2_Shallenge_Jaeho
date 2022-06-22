import React, { useState } from "react";
import { User } from "src/types";
import PageTab from "@domain/FollowPage/FollowPageTab";
import { useAtom } from "jotai";
import userAtom from "@store/user";
import useGetFollowUserList from "@hooks/quries/useGetFollowUserList";
import { useEffect } from "react";
import useGetUserById from "@hooks/quries/useGetUser";
import { useParams } from "react-router-dom";

const FollowPage = () => {
  //const [user] = useAtom(userAtom);

  const { userId } = useParams();
  console.log(userId);
  const { data: userRes } = useGetUserById(userId);

  const [user, setUser] = useState<User>({} as User);
  const [followerList, setFollowerList] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);

  console.log(user);
  const followerIdList: string[] =
    user?.followers?.map((follow) => follow.follower) ?? [];
  const followingIdList: string[] =
    user?.following?.map((following) => following.user).filter((id) => id) ??
    [];

  console.log(followerIdList);
  const { data: followerResList } = useGetFollowUserList(followerIdList);
  const { data: followingResList } = useGetFollowUserList(followingIdList);

  useEffect(() => {
    if (userRes) {
      console.log(userRes);
      setUser(userRes.data);
    }
  }, [userRes]);

  useEffect(() => {
    if (followerResList) {
      console.log(followerResList.map((res) => res.data));
      setFollowerList(followerResList.map((res) => res.data));
    }
  }, [userRes, followerResList]);

  useEffect(() => {
    if (followingResList) {
      console.log(followingResList.map((res) => res.data));
      setFollowingList(followingResList.map((res) => res.data));
    }
  }, [userRes, followingResList]);

  return (
    <PageTab
      followingList={followingList}
      followersList={followerList}
    ></PageTab>
  );
};

export default FollowPage;
