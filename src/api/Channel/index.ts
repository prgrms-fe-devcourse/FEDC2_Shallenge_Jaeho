import axios from "../../lib/axios";
export const fetchGetChannels = () => axios.get("/channels");

export const fetchGetChannelByName = (channelName: string) =>
  axios.get(`/channels/${channelName}`);
