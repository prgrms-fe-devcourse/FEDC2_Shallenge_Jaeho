import { useEffect, useState } from "react";

import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { format } from "date-fns";
import { useAtom } from "jotai";

import {
  fetchDeleteCommentByPostId,
  fetchPostCommentByPostId,
} from "@/api/comment";
import { fetchPostNotification } from "@/api/notification";
import DefaultText from "@/base/DefaultText";
import CommentCard from "@/domain/CommentPage/CommentCard";
import CommentInput from "@/domain/CommentPage/CommentInput";
import useGetChallenge from "@/hooks/quries/useGetChallenge";
import userAtom from "@/store/user";

import { Comment, User } from "../types/index";

const CommentPage = () => {
  const [myUser] = useAtom(userAtom);
  const [commentList, setCommentList] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [show, setShow] = useState(false);

  const [, , , postId] = window.location.pathname.split("/");
  const { data: Contents } = useGetChallenge(postId);

  useEffect(() => {
    if (Contents?.status === 200) {
      const { author, comments } = Contents.data;
      setAuthorId(author._id);
      setCommentList(comments);
      setShow(true);
    }
  }, [Contents]);

  useEffect(() => {
    if (commentValue !== "") {
      void commentSubmit();
    }
  }, [commentValue]);

  const onCommentNotificationEvent = async (commentId: string) => {
    if (myUser._id === authorId) return;
    const { status } = await fetchPostNotification({
      notificationType: "COMMENT",
      notificationTypeId: commentId,
      userId: authorId,
    });
    status === 200
      ? console.log("success comment-notification")
      : console.log("fail comment-notification");
  };

  const setNewCommentList = (data: Comment) => {
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

  const commentDelete = async (_id: string) => {
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

  const onDeleteCommentEvent = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    if (target.dataset?.icon !== "icon") return;
    if (target.tagName === "IMG" && confirm("댓글을 삭제하시겠습니까?")) {
      const targetCommentId = target.closest("li").dataset._id;
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
        {show && commentList.length === 0 ? (
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
                    <CommentCard
                      isGuest={myUser?._id !== comment.author._id}
                      avatarSrc={comment.author.image}
                      commentAuthor={comment.author.fullName}
                      commentAuthorId={comment.author._id}
                      commentContent={comment.comment}
                      commentCreatedAt={format(
                        new Date(comment.createdAt),
                        "yyyy-MM-dd HH:mm"
                      )}
                    ></CommentCard>
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
