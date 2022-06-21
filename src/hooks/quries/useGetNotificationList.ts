import { useQuery } from "react-query";
import { fetchGetNotificationList } from "@api/notification";

const useGetNotificationList = () => {
  return useQuery(["notificationList"], fetchGetNotificationList);
};

export default useGetNotificationList;
