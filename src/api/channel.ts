import { AxiosResponse } from "axios";

import axios from "@/lib/axios";
import { Channel } from "@/types/index";

export const fetchGetChannels = () => axios.get("/channels");

export const fetchGetChannelByName = (
  channelName: string
): Promise<AxiosResponse<Channel>> => axios.get(`/channels/${channelName}`);
