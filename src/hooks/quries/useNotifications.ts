import { fetchGetNotificationList } from "@api/notification";
import { useQuery } from "react-query";

const useNotifications = () => {
  return useQuery(["notifications"], fetchGetNotificationList);
};

export default useNotifications;
