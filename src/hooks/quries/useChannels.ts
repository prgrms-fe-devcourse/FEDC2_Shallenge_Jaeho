import { fetchGetChannels } from "@api/channel";
import { useQuery } from "react-query";

const useChannels = () => {
  return useQuery("channels", fetchGetChannels);
};

export default useChannels;
