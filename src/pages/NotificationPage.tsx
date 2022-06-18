import React from "react";
import { Notification } from "src/types";
import NotiComponent from "@domain/NotificationPage/Notification";
import { Flex, Text } from "@chakra-ui/react";
import DefaultText from "@base/DefaultText";

const NotificationPage = () => {
  const notificationList: Notification[] = [
    /*
    {
      seen: false,
      _id: "notificationId1",
      author: {
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
      user: "user1",
      post: "",
      follow: "follower1",
      createdAt: "2022-05-12T09:44:19.128",
      updatedAt: "2022-05-12T09:44:19.128",
    },
    */
  ];

  return (
    <Flex direction="column" padding="40px 0">
      {notificationList.length ? (
        notificationList.map((notification) => {
          return (
            <NotiComponent
              alarmType={notification.follow ? "follow" : "comment"}
              avatarSrc=""
              userName="사용자1"
            ></NotiComponent>
          );
        })
      ) : (
        <DefaultText>
          알람이 아직 안 왔어요!
          <br />
          먼저 다가가 보시는 건 어떠신가요?😊
        </DefaultText>
      )}
    </Flex>
  );
};

export default NotificationPage;
