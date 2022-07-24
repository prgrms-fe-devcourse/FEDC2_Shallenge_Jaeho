import CommentCard from "@/domain/CommentPage/CommentCard";
import GlobalStyles from "src/styles/GlobalStyles";

export default {
  title: "Domain/CommentPage/CommentCard",
  component: CommentCard,
};

export const Default = () => {
  return (
    <>
      <GlobalStyles />
      <CommentCard
        isGuest={true}
        avatarSrc={undefined}
        commentAuthor={"commentAuthor"}
        commentAuthorId={"example"}
        commentContent={"storybook comment"}
        commentCreatedAt={"2022.06.23 05:23"}
      ></CommentCard>
    </>
  );
};
