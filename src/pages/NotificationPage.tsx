import DefaultText from "@base/DefaultText";
import { Flex, Spinner } from "@chakra-ui/react";
import NotificationCard from "@domain/NotificationPage/Notification";
import useNotifications from "@hooks/quries/useNotifications";
import usePageTitle from "@hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import { Notification } from "src/types";

const NotificationPage = () => {
  const navigate = useNavigate();
  const handleClick = (notification: Notification) => {
    if (notification.follow) {
      navigate(`/profile/${notification.follow}`);
    } else if (notification.comment) {
      console.log(notification.comment);
      navigate(`/`);
    } else {
      navigate(`/`);
    }
  };

  usePageTitle("알림");
  const { data, isLoading } = useNotifications();

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Flex direction="column" padding="40px 0">
      {data.length ? (
        data.map((notification: Notification) => {
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
              onClick={() => {
                handleClick(notification);
              }}
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
