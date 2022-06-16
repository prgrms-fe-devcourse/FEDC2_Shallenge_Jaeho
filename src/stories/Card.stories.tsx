import Card from "../components/base/Card";
export default {
  title: "Component/Base/Card",
  component: "Card",
};

export const User = () => {
  return (
    <Card
      avatarSrc="#"
      type="user"
      heading="김땡땡"
      text="오늘 하루도 열심히!"
    ></Card>
  );
};

export const Challange = () => {
  return (
    <Card
      avatarSrc="#"
      type="challange"
      heading="공원 달리기"
      text="가지고 싶었던 런닝 운동화 사기"
      commentCount={12}
      cheerCount={30}
    ></Card>
  );
};
