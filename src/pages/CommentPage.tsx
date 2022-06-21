/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useAtom } from "jotai";
import userAtom from "@store/user";
import useGetChallenge from "@hooks/quries/useGetChallenge";
import {
  fetchDeleteCommentByPostId,
  fetchPostCommentByPostId,
} from "@api/comment";
import { User } from "../types/index";
import { fetchPostNotification } from "@api/notification";
import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import DefaultText from "@base/DefaultText";
import Comment from "@domain/CommentPage/Comment";
import CommentInput from "@domain/CommentPage/CommentInput";

const CommentPage = () => {
  const [myUser] = useAtom(userAtom);
  const [commentList, setCommentList] = useState([]);
  const [commentValue, setCommentValue] = useState("");

  const [, , , postId] = window.location.pathname.split("/");
  const { data: Contents } = useGetChallenge(postId);

  useEffect(() => {
    if (Contents?.status === 200) {
      const { comments } = Contents?.data;
      setCommentList(comments);
    }
  }, [Contents]);

  useEffect(() => {
    if (commentValue !== "") {
      void commentSubmit();
    }
  }, [commentValue]);

  const onCommentNotificationEvent = async (commentId) => {
    const { status } = await fetchPostNotification({
      notificationType: "COMMENT",
      notificationTypeId: commentId,
      userId: myUser._id,
    });
    status === 200
      ? console.log("success comment-notification")
      : console.log("fail comment-notification");
  };

  const setNewCommentList = (data) => {
    setCommentList([...commentList, data]);
    void onCommentNotificationEvent(data._id);
  };

  const commentSubmit = async () => {
    const { data, status } = await fetchPostCommentByPostId(
      commentValue,
      postId
    );
    status === 200 ? setNewCommentList(data) : alert("다시 시도바랍니다!");
  };

  const commentDelete = async (_id) => {
    const { data, status } = await fetchDeleteCommentByPostId(_id);
    status === 200
      ? setCommentList([
          ...commentList.filter((comment) => comment._id !== data._id),
        ])
      : alert("다시 시도바랍니다!");
  };

  const onCommentValueChangeEvent = (newCommentValue: string) => {
    const newComment = newCommentValue.trim();
    if (newComment !== "") setCommentValue(newComment);
  };

  const onDeleteCommentEvent = (event) => {
    if (event.target.tagName === "IMG" && confirm("댓글을 삭제하시겠습니까?")) {
      const targetCommentId = event.target.closest("li").dataset._id;
      void commentDelete(targetCommentId);
    }
  };

  return (
    <>
      <Flex
        direction="column"
        padding="40px 0"
        mb="48px"
        onClick={onDeleteCommentEvent}
      >
        {commentList.length === 0 ? (
          <DefaultText>댓글이 아직 없습니다!</DefaultText>
        ) : (
          <List spacing={2}>
            {commentList.map(
              (comment: {
                _id: string;
                author: User;
                createdAt: string;
                comment: string;
              }) => {
                return (
                  <ListItem key={comment._id} data-_id={`${comment._id}`}>
                    <Comment
                      isGuest={myUser?._id !== comment.author._id}
                      avatarSrc={comment.author.image}
                      commentAuthor={comment.author.fullName}
                      commentContent={comment.comment}
                      commentCreatedAt={format(
                        new Date(comment.createdAt),
                        "yyyy-MM-dd HH:mm"
                      )}
                    ></Comment>
                  </ListItem>
                );
              }
            )}
          </List>
        )}
      </Flex>
      {myUser && (
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
            <CommentInput
              onValueChange={onCommentValueChangeEvent}
            ></CommentInput>
          </form>
        </Box>
      )}
    </>
  );
};

export default CommentPage;
