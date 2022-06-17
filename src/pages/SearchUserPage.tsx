import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { User } from "src/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import InputLayout from "@layout/InputLayout";
import Card from "@base/Card";

const userList: User[] = [
  {
    coverImage: "자기소개",
    image: "프로필이미지주소", // 프로필 이미지
    role: "role",
    emailVerified: true, // 사용되지 않음
    banned: false, // 사용되지 않음
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
    emailVerified: true, // 사용되지 않음
    banned: false, // 사용되지 않음
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
    emailVerified: true, // 사용되지 않음
    banned: false, // 사용되지 않음
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
    <Flex justifyContent={"center"} width="100%">
      {userList.length === 0 ? (
        <Text
          fontSize="lg"
          paddingTop="80px"
          color="#727272"
          textAlign="center"
        >
          <Box
            padding="2px"
            display="inline-block"
            backgroundColor="#e4e4e4"
            borderRadius="4px"
          >
            {userName}
          </Box>
          으로 찾은 사용자가 없어요 😢
          <br />
          다른 이름으로 찾아보시는 건 어떠신가요?
        </Text>
      ) : (
        <Flex width="100%" flexDirection="column">
          <Text
            fontSize="lg"
            padding={"40px 0"}
            alignSelf="center"
            color="#838489"
          >
            {userName} 으로 찾은 사용자들이에요
          </Text>
          {userList.map((user) => {
            return (
              <Card
                type="user"
                heading={user.fullName}
                text={user.coverImage ?? "한줄 소개 없음"}
                margin="4px 0"
              ></Card>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchUserPage;
