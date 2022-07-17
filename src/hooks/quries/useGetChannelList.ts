import { fetchGetChannels } from "@api/channel";
import { useQuery } from "react-query";

const useGetChannelList = () => {
  return useQuery(["channelList"], fetchGetChannels);
};

export default useGetChannelList;
