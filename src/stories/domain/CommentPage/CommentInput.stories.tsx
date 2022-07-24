import CommentInput from "@/domain/CommentPage/CommentInput";
import GlobalStyles from "src/styles/GlobalStyles";

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
