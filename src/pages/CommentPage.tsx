/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Comment from "@domain/CommentPage/Comment";
import CommentInput from "@domain/CommentPage/CommentInput";
import { useAtom } from "jotai";
import userAtom from "@store/user";
import useGetChallenge from "@hooks/quries/useGetChallenge";
import { fetchPostCommentByPostId } from "@api/comment";
import { format } from "date-fns";

const CommentPage = () => {
  const [myUser] = useAtom(userAtom);
  // console.log(myUser);
  const [commentList, setCommentList] = useState([]);
  const [commentValue, setCommentValue] = useState("");

  const [, , , postId] = window.location.pathname.split("/");
  const { data: Contents } = useGetChallenge(postId);
  useEffect(() => {
    if (Contents?.status === 200) {
      const { comments } = Contents?.data;
      setCommentList(comments);
      console.log(comments);
    }
  }, [Contents]);

  useEffect(() => {
    if (commentValue !== "") {
      void commentSubmit();
    }
  }, [commentValue]);

  const onCommentValueChange = (newCommentValue: string) => {
    const newComment = newCommentValue.trim();
    if (newComment !== "") setCommentValue(newComment);
  };

  const commentSubmit = async () => {
    const { data, status } = await fetchPostCommentByPostId(
      commentValue,
      postId
    );
    status === 200
      ? setCommentList([...commentList, data])
      : alert("다시 시도바랍니다!");
  };

  return (
    <>
      <Flex direction="column" gap="8px" padding="40px 0" mb="48px">
        {commentList.map((comment) => {
          return (
            <Comment
              key={comment._id}
              isGuest={myUser._id !== comment.author._id}
              avatarSrc={comment.author.image}
              commentAuthor={comment.author.fullName}
              commentContent={comment.comment}
              commentCreatedAt={format(
                new Date(comment.createdAt),
                "yyyy-MM-dd HH:mm"
              )}
            ></Comment>
          );
        })}
      </Flex>
      <Box
        position="absolute"
        maxWidth="640px"
        width="100%"
        left="50%"
        transform="translate(-50%, 0%)"
        bottom="96px"
        zIndex={2}
      >
        <form>
          <CommentInput onValueChange={onCommentValueChange}></CommentInput>
        </form>
      </Box>
    </>
  );
};

export default CommentPage;
