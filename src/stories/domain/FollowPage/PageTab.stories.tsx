import FollowPageTab from "@domain/FollowPage/FollowPageTab";
import TextLayout from "@layout/TextLayout";

export default {
  title: "Component/Domain/FollowPage/PageTab",
  component: FollowPageTab,
};

export const Default = () => {
  return (
    <TextLayout text="닉네임">
      <FollowPageTab followingList={[]} followersList={[]}></FollowPageTab>
    </TextLayout>
  );
};
