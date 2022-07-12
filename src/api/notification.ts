import axios from "@lib/axios";

export const fetchGetNotificationList = async () => {
  const { data } = await axios.get("/notifications");
  return data;
};

export const fetchGetSeenMyNotification = () =>
  axios.get("/notifications/seen");

export const fetchPostNotification = ({
  notificationType,
  notificationTypeId,
  userId,
  postId,
}: {
  notificationType: "COMMENT" | "FOLLOW" | "LIKE" | "MESSAGE";
  notificationTypeId: string;
  userId: string;
  postId?: string | null;
}) =>
  axios.post("/notifications/create", {
    notificationType,
    notificationTypeId,
    userId,
    postId,
  });
