import React, { useState } from "react";
import { User } from "src/types";
import PageTab from "@domain/FollowPage/FollowPageTab";
import { useAtom } from "jotai";
import userAtom from "@store/user";
import useGetFollowUserList from "@hooks/quries/useGetFollowUserList";
import { useEffect } from "react";
import useGetUserById from "@hooks/quries/useGetUser";

const followerList: User[] = [
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: false, // 사용되지 않음
    banned: false, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "follower1", // 사용자 id
    fullName: "팔로워1", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: false, // 사용되지 않음
    banned: false, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "follower2", // 사용자 id
    fullName: "팔로워2", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: false, // 사용되지 않음
    banned: false, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "follower3", // 사용자 id
    fullName: "팔로워3", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
];
const followingList: User[] = [];

const FollowPage = () => {
  const [user] = useAtom(userAtom);

  //const { data: userRes } = useGetUserById();
  //const { data: followerRes } = useGetFollowUserList(followerIdList);
  //const { data: followingRes } = useGetFollowUserList(followingIdList);

  //const followerIdList = user.followers.map((follow) => follow.user);
  //const followingIdList = user.following.map((following) => following.user);

  const [followerList, setFollowerList] = useState<User[]>([]);
  const [followingList, setFollowingList] = useState<User[]>([]);
  console.log(user);
  /*
  useEffect(() => {
    if (followerRes) {
      console.log(followerRes);
    }
  }, [user, followerRes]);
*/
  return (
    <PageTab
      followingList={followerList}
      followersList={followingList}
    ></PageTab>
  );
};

export default FollowPage;
