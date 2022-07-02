import GlobalStyles from "src/styles/GlobalStyles";

import CommentPage from "@/pages/CommentPage";
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
