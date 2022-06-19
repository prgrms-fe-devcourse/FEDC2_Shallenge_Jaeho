import { Box, Flex } from "@chakra-ui/react";
import Comment from "@domain/CommentPage/Comment";
import CommentInput from "@domain/CommentPage/CommentInput";

const dummyData = [
  {
    _id: "0",
    comment:
      "첫번 째 댓 글입 니다~Lorem ipsum dolor sit, amet consecteturLorem ipsum dolor sit, amet consecteturLorem ipsum dolor sit, amet consectetur",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName1",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "1",
    comment: "2번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName2",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "2",
    comment: "3번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "3",
    comment: "4번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "4",
    comment: "5번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "5",
    comment: "6번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "6",
    comment: "7번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "7",
    comment: "8번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "8",
    comment: "9번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "9",
    comment: "9번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
  {
    _id: "10",
    comment: "10번 째 댓 글입 니다~",
    author: {
      _id: "author._id",
      image: undefined,
      fullName: "author.fullName3",
    },
    createdAt: "2022-06-23 17:23",
  },
];

const CommentPage = () => {
  const comments = dummyData;
  return (
    <>
      <Flex direction="column" gap="8px" padding="40px 0" mb="48px">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              avatarSrc={comment.author.image}
              commentAuthor={comment.author.fullName}
              commentContent={comment.comment}
              commentCreatedAt={comment.createdAt}
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
        <CommentInput></CommentInput>
      </Box>
    </>
  );
};

export default CommentPage;
