import GlobalStyles from "src/styles/GlobalStyles";

import CommentInput from "@/domain/CommentPage/CommentInput";

export default {
  title: "Domain/CommentPage/CommentInput",
  component: CommentInput,
};

export const Default = () => {
  return (
    <>
      <GlobalStyles />
      <CommentInput></CommentInput>
    </>
  );
};
