import { useQuery } from "react-query";

import { fetchGetChannels } from "@/api/channel";

const useChannels = () => {
  return useQuery("channels", fetchGetChannels);
};

export default useChannels;
