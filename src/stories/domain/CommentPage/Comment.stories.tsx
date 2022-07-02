import GlobalStyles from "src/styles/GlobalStyles";

import Comment from "@/domain/CommentPage/Comment";

export default {
  title: "Domain/CommentPage/Comment",
  component: Comment,
};

export const Default = () => {
  return (
    <>
      <GlobalStyles />
      <Comment></Comment>
    </>
  );
};
