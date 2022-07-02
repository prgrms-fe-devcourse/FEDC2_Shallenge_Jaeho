import { useQuery } from "react-query";

import { fetchGetNotificationList } from "@/api/notification";

const useNotifications = () => {
  return useQuery(["notifications"], fetchGetNotificationList);
};

export default useNotifications;
