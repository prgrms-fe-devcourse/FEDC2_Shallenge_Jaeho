import React, { useEffect, useState } from "react";

import { Notification } from "src/types";
import NotificationCard from "@domain/NotificationPage/Notification";
import { Flex } from "@chakra-ui/react";
import DefaultText from "@base/DefaultText";
import useNotifications from "@hooks/quries/useNotifications";
import usePageTitle from "@hooks/usePageTitle";

const NotificationPage = () => {
  usePageTitle("알람");
  const { data: response } = useNotifications();
  const [notificationList, setNotificationList] = useState<Notification[]>([]);
  console.log(response);

  useEffect(() => {
    if (response) {
      console.log(response.data);
      setNotificationList(notificationList);
    }
  }, [response]);
  /*
  const notificationList: Notification[] = [
    {
      // follow type
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
        fullName: "사용자닉네임1", //
        email: "asd@asd.com",
        createdAt: "2022-05-12T09:44:19.128Z",
        updatedAt: "2022-05-12T09:44:19.128Z",
      },
      user: "user?",
      post: null,
      follow: "followerId1",
      createdAt: "2022-05-12T09:44:19.128",
      updatedAt: "2022-05-12T09:44:19.128",
    },
    {
      // comment type
      seen: false,
      _id: "notificationId2",
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
        fullName: "사용자닉네임2", //
        email: "asd@asd.com",
        createdAt: "2022-05-12T09:44:19.128Z",
        updatedAt: "2022-05-12T09:44:19.128Z",
      },
      user: "user?",
      post: "postId1",
      comment: {
        _id: "commentId1",
        comment: "댓글1",
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
          fullName: "사용자닉네임3", //
          email: "asd@asd.com",
          createdAt: "2022-05-12T09:44:19.128Z",
          updatedAt: "2022-05-12T09:44:19.128Z",
        },
        post: "postId1",
        createdAt: "2022-05-12T09:44:19.128",
        updatedAt: "2022-05-12T09:44:19.128",
      },
      createdAt: "2022-05-12T09:44:19.128",
      updatedAt: "2022-05-12T09:44:19.128",
    },
    {
      // like type
      seen: false,
      _id: "notificationId3",
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
      user: "user?",
      post: "postId1",
      createdAt: "2022-05-12T09:44:19.128",
      updatedAt: "2022-05-12T09:44:19.128",
    },
  ];
  */

  return (
    <Flex direction="column" padding="40px 0">
      {notificationList.length ? (
        notificationList.map((notification) => {
          return (
            <NotificationCard
              key={notification._id}
              alarmType={
                notification.follow
                  ? "follow"
                  : notification.comment
                  ? "comment"
                  : "cheer"
              }
              avatarSrc=""
              userName={notification.author.fullName}
            ></NotificationCard>
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
