import Comment from "@domain/CommentPage/Comment";
import GlobalStyles from "src/styles/GlobalStyles";

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
