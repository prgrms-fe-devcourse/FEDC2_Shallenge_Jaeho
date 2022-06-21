import { useQuery } from "react-query";
import { fetchGetPostByPostId } from "@api/post";

const useGetChallenge = (postId: string) => {
  return useQuery(["challenge"], () => fetchGetPostByPostId(postId));
};

export default useGetChallenge;
