import axios from "@lib/axios";

export const fetchGetMessageList = () => axios.get("/messages/conversations");

export const fetchGetMessageListByUserId = (userId: string) =>
  axios.get("/messages", {
    data: { userId },
  });

export const fetchPostMessageByUserId = (message: string, receiver: string) =>
  axios.post("/messages/create", {
    data: { message, receiver },
  });

export const fetchPutSeenMessagesByUserId = (sender: string) =>
  axios.put("/messages/update-seen", {
    data: { sender },
  });
