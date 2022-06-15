import axios from "../../lib/axios";

export const fetchPostLikeByPostId = (id: string) =>
  axios.post("/likes/create", {
    data: { id },
  });

export const fetchDeleteLikeByPostId = (id: string) =>
  axios.delete("/likes/delete", {
    data: { id },
  });
