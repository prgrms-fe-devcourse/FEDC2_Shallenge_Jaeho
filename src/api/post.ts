import axios from "@lib/axios";

export const fetchGetPostListByChannel = (channelId: string) =>
  axios.get(`/posts/channel/${channelId}`);

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

export const fetchGetPostByPostId = (postId: string) =>
  axios.get(`/posts/${postId}`);

export const fetchDeletePostByPostId = (id: string) =>
  axios.delete(`/posts/delete`, {
    data: { id },
  });
