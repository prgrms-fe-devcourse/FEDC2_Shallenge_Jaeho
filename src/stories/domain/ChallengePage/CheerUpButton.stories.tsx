import CheerUpButton from "@/domain/ChallengePage/CheerUpButton";

export default {
  title: "Component/CheerUpButton",
  component: CheerUpButton,
};

export const isCheeredFalse = () => {
  return <CheerUpButton isCheered={false} count={98} />;
};

export const isCheeredTrue = () => {
  return <CheerUpButton isCheered={true} count={98} />;
};
