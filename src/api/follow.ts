import axios from "@/lib/axios";

export const fetchPostFollowByUserId = (userId: string) =>
  axios.post("/follow/create", {
    userId,
  });

export const fetchDeleteFollowByUserId = (id: string) =>
  axios.delete("/follow/delete", {
    data: { id },
  });
