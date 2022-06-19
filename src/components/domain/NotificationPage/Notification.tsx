import { Flex, Avatar, Text } from "@chakra-ui/react";

type NotificationType = {
  avatarSrc: string;
  userName: string;
  alarmType: "follow" | "comment" | "cheer";
};

const Notification = ({ avatarSrc, userName, alarmType }: NotificationType) => {
  return (
    <Flex
      w="100%"
      h="96px"
      padding="0 16px"
      alignItems="center"
      bg="#ffffff"
      flexShrink={0}
    >
      <Avatar size="lg" src={avatarSrc} marginRight="16px" />
      <Text fontSize={"lg"}>
        <span style={{ fontWeight: "bold" }}>{userName}</span>
        님이
        {alarmType === "follow"
          ? " 나를 팔로우했어요 😊"
          : alarmType === "comment"
          ? " 댓글을 남겼어요 🪧"
          : " 나를 응원했어요 🎉"}
      </Text>
    </Flex>
  );
};

export default Notification;
