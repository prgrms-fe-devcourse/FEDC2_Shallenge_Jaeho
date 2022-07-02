import { Flex } from "@chakra-ui/react";

import DefaultText from "@/base/DefaultText";
import NotificationCard from "@/domain/NotificationPage/Notification";
import useNotifications from "@/hooks/quries/useNotifications";
import usePageTitle from "@/hooks/usePageTitle";
import { Notification, User } from "@/types/index";

const NotificationPage = () => {
  usePageTitle("알림");
  const { data: response, isLoading } = useNotifications();

  if (isLoading) {
    return <></>;
  }

  return (
    <Flex direction="column" padding="40px 0">
      {response?.data.length ? (
        response?.data.map((notification: Notification) => {
          return (
            <NotificationCard
              key={notification._id}
              notificationType={
                notification.follow
                  ? "follow"
                  : notification.comment
                  ? "comment"
                  : "like"
              }
              avatarSrc={notification.author.image}
              userName={notification.author.fullName}
              createdAt={notification.createdAt}
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
