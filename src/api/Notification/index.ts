import axios from "../../lib/axios";

export const fetchGetNotificationList = () => axios.get("/notifications");

export const fetchGetSeenMyNotification = () =>
  axios.get("/notifications/seen");
