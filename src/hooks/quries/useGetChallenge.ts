import { fetchGetPostByPostId } from "@api/post";
import { useQuery } from "react-query";

const useGetChallenge = (postId: string) => {
  return useQuery(["challenge"], () => fetchGetPostByPostId(postId));
};

export default useGetChallenge;
