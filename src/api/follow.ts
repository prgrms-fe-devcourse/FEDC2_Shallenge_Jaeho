import axios from "@/lib/axios";
import { Follow } from "src/types";

export const fetchPostFollowByUserId = async (userId: string) => {
  const { data } = await axios.post<Follow>("/follow/create", {
    userId,
  });

  return data;
};

export const fetchDeleteFollowByUserId = async (id: string) => {
  const { data } = await axios.delete<Follow>("/follow/delete", {
    data: { id },
  });

  return data;
};

// createdAt: "2022-07-11T09:42:24.894Z"
// follower: "62b0afd5671b1a50e2eb6cbb"
// updatedAt: "2022-07-11T09:42:24.894Z"
// user: "62aeb801f9b8ca611c46650b"
// __v: 0
// _id: "62cbf080cf52f92bfbddb2fa"
