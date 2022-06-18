import { Flex, Avatar, Text } from "@chakra-ui/react";

type NotificationType = {
  avatarSrc: string;
  userName: string;
  alarmType: "follow" | "comment";
};

const Notification = ({ avatarSrc, userName, alarmType }: NotificationType) => {
  return (
    <Flex w="100%" h="96px" alignItems="center" bg="#ffffff">
      <Avatar size="lg" src={avatarSrc} marginLeft="8px" marginRight="16px" />
      <Text fontSize={"lg"}>
        <span style={{ fontWeight: "bold" }}>{userName}</span>
        님이
        {alarmType === "follow" ? " 나를 팔로우했어요" : " 댓글을 남겼어요"}
      </Text>
    </Flex>
  );
};

export default Notification;
