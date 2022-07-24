import CommentPage from "@/pages/CommentPage";
import GlobalStyles from "src/styles/GlobalStyles";
export default {
  title: "Pages/CommentPage",
  compoenent: "CommentPage",
};

export const Default = () => {
  return (
    <>
      <GlobalStyles />
      <CommentPage></CommentPage>
    </>
  );
};
