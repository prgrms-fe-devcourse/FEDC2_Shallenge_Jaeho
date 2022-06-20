import axios from "@lib/axios";
import { AxiosResponse } from "axios";
import { Channel } from "src/types";

export const fetchGetChannels = () => axios.get("/channels");

export const fetchGetChannelByName = (
  channelName: string
): Promise<AxiosResponse<Channel>> => axios.get(`/channels/${channelName}`);
