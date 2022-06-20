import React from "react";
import { User } from "src/types";
import PageTab from "@domain/FollowPage/FollowPageTab";

const user: User = {
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
  following: [
    {
      _id: "6169e91316cb2265df003c6d",
      user: "6169e58216cb2265df003bf4",
      follower: "6169e206aa57d952c6dc1edd",
      createdAt: "2021-10-15T20:48:19.816Z",
      updatedAt: "2021-10-15T20:48:19.816Z",
    },
    {
      _id: "6169e91316cb2265df003c12",
      user: "6169e58216cb2265df003b12",
      follower: "6169e206aa57d952c6dc1e12",
      createdAt: "2021-10-15T20:48:19.816Z",
      updatedAt: "2021-10-15T20:48:19.816Z",
    },
  ],
  notifications: [],
  messages: [],
  _id: "userid1", // 사용자 id
  fullName: "사용자닉네임", //
  email: "asd@asd.com",
  createdAt: "2022-05-12T09:44:19.128Z",
  updatedAt: "2022-05-12T09:44:19.128Z",
};

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
  return (
    <PageTab
      followingList={followerList}
      followersList={followingList}
    ></PageTab>
  );
};

export default FollowPage;
