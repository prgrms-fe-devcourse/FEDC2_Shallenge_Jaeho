import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import PageTab from "@/domain/FollowPage/FollowPageTab";
import useGetFollowUserList from "@/hooks/quries/useGetFollowUserList";
import useGetUserById from "@/hooks/quries/useGetUser";
import { User } from "@/types/index";

const FollowPage = () => {
  //const [user] = useAtom(userAtom);

  const { userId } = useParams();
  const { data: userRes } = useGetUserById(userId);

  const [user, setUser] = useState<User>({} as User);
  const [followerList, setFollowerList] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);

  const followerIdList: string[] =
    user?.followers?.map((follow) => follow.follower) ?? [];
  const followingIdList: string[] =
    user?.following?.map((following) => following.user).filter((id) => id) ??
    [];

  const { data: followerResList } = useGetFollowUserList(followerIdList);
  const { data: followingResList } = useGetFollowUserList(followingIdList);

  useEffect(() => {
    if (userRes) {
      setUser(userRes.data);
    }
  }, [userRes]);

  useEffect(() => {
    if (followerResList) {
      setFollowerList(followerResList.map((res) => res.data));
    }
  }, [userRes, followerResList]);

  useEffect(() => {
    if (followingResList) {
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
