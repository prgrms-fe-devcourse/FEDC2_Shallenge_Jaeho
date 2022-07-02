import CommentButton from "@/domain/ChallengePage/CommentButton";

export default {
  title: "Component/CommentButton",
  component: CommentButton,
};

export const Comment = () => {
  return <CommentButton count={23} />;
};
