import InputLayout from "@layout/InputLayout";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import QueryString from "qs";
import { Flex, Text } from "@chakra-ui/react";

const dummyUser = [
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: Boolean, // 사용되지 않음
    banned: Boolean, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "userid1", // 사용자 id
    fullName: "사용자닉네임", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: Boolean, // 사용되지 않음
    banned: Boolean, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "userid1", // 사용자 id
    fullName: "사용자닉네임", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: Boolean, // 사용되지 않음
    banned: Boolean, // 사용되지 않음
    isOnline: true,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "userid1", // 사용자 id
    fullName: "사용자닉네임", //
    email: "asd@asd.com",
    createdAt: "2022-05-12T09:44:19.128Z",
    updatedAt: "2022-05-12T09:44:19.128Z",
  },
];

const SearchUserPage = () => {
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  console.log(query.userName);
  const [userName, setUserName] = useState(query.userName as string);
  // userName으로 user을 찾는 로직
  return (
    <InputLayout placeholder="@김땡땡">
      <Flex justifyContent={"center"} width="100%">
        {dummyUser.length === 0 ? (
          <Text fontSize="lg" paddingTop="80px">
            <span>{userName}</span>으로 찾은 사용자가 없어요 😢
            <br />
            다른 이름으로 찾아보시는 건 어떠신가요?
          </Text>
        ) : (
          <Flex></Flex>
        )}
      </Flex>
    </InputLayout>
  );
};

export default SearchUserPage;
