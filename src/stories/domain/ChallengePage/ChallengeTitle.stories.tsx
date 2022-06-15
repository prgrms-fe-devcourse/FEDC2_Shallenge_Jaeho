import ChallengeTitle from "@domain/ChallengePage/ChallengeTitle";

export default {
  title: "Domain/ChallengePage/ChallengeTitle",
  component: ChallengeTitle,
  argTypes: {
    startDate: { defaultValue: "2022.05.23", control: "text" },
    endDate: { defaultValue: "2022.06.23", control: "text" },
    width: {
      defaultValue: 610,
      control: { type: "range", min: 360, max: 610 },
    },
    title: { defaultValue: "가지고 싶던 운동화 사기", control: "text" },
    restDay: { defaultValue: 5, control: "number" },
  },
};

export const Default = (args: any) => {
  return <ChallengeTitle {...args} />;
};
