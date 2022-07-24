import { AxiosResponse } from "axios";
import { Channel } from "src/types";

import axios from "@/lib/axios";

export const fetchGetChannels = async () => {
  const { data } = await axios.get<Channel[]>("/channels");

  return data;
};

export const fetchGetChannelByName = (
  channelName: string
): Promise<AxiosResponse<Channel>> => axios.get(`/channels/${channelName}`);
