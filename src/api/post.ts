import axios from "@/lib/axios";
import { Post } from "src/types";

export const fetchGetPostListByChannel = async (channelId: string) => {
  const { data } = await axios.get<Post[]>(`/posts/channel/${channelId}`);

  return data;
};

export const fetchGetUserPostList = (authorId: string) =>
  axios.get(`/posts/author/${authorId}`);

export const fetchPostPostByChannelId = ({
  title,
  image,
  channelId,
}: {
  title: string;
  image?: string | null;
  channelId: string;
}) =>
  axios.post("/posts/create", {
    title,
    image,
    channelId,
  });

export const fetchPutPost = (updatePost: {
  postId: string;
  title: string;
  image?: string | null;
  channelId: string;
}) => axios.put("/posts/update", { ...updatePost });

export const fetchGetPostByPostId = (postId: string) =>
  axios.get(`/posts/${postId}`);

export const fetchDeletePostByPostId = (id: string) =>
  axios.delete(`/posts/delete`, {
    data: { id },
  });

export const fechPostListsByChannelsIdList = async (
  channelIdList: string[]
) => {
  return await Promise.all(
    channelIdList.map((channelId) => fetchGetPostListByChannel(channelId))
  );
};
