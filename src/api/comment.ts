import axios from "@lib/axios";

export const fetchPostCommentByPostId = (comment: string, postId: string) =>
  axios.post("/comments/create", {
    data: { comment, postId },
  });

export const fetchDeleteCommentByPostId = (id: string) =>
  axios.delete("/comments/delete", { data: { id } });
