import axios from "@lib/axios";

export const fetchGetNotificationList = () => axios.get("/notifications");

export const fetchGetSeenMyNotification = () =>
  axios.get("/notifications/seen");

export const fetchPostNotification = ({
  notificationType,
  notificationTypeId,
  userId,
  postId,
}: {
  notificationType: string;
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
