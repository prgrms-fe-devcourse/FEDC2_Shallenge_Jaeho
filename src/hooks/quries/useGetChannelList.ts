import { useQuery } from "react-query";
import { fetchGetChannels } from "@api/channel";

const useGetChannelList = () => {
  return useQuery(["channelList"], fetchGetChannels);
};

export default useGetChannelList;
