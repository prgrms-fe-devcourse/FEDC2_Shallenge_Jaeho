import Notification from "@domain/NotificationPage/Notification";
import { Flex } from "@chakra-ui/react";
export default {
  title: "Component/Domain/NotificationPage/Notification",
  component: Notification,
};

export const Default = () => {
  return (
    <Flex w="610px" height="100vh" flexDirection="column">
      <Notification avatarSrc="" userName="사용자1" alarmType="follow" />
      <Notification avatarSrc="" userName="사용자1" alarmType="comment" />
      <Notification avatarSrc="" userName="사용자1" alarmType="cheer" />
    </Flex>
  );
};