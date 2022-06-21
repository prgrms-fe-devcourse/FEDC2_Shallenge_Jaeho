import axios from "@lib/axios";

export const fetchPostLikeByPostId = (postId: string) =>
  axios.post("/likes/create", {
    postId,
  });

export const fetchDeleteLikeByPostId = (id: string) =>
  axios.delete("/likes/delete", {
    data: { id },
  });
