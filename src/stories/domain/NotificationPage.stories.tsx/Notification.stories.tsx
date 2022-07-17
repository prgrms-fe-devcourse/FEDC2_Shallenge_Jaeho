import { Flex } from "@chakra-ui/react";
import Notification from "@domain/NotificationPage/Notification";
export default {
  title: "Component/Domain/NotificationPage/Notification",
  component: Notification,
};

export const Default = () => {
  return (
    <Flex w="610px" height="100vh" flexDirection="column">
      <Notification
        avatarSrc=""
        userName="사용자1"
        notificationType="follow"
        createdAt=""
      />
      <Notification
        avatarSrc=""
        userName="사용자1"
        notificationType="comment"
        createdAt=""
      />
      <Notification
        avatarSrc=""
        userName="사용자1"
        notificationType="like"
        createdAt=""
      />
    </Flex>
  );
};
