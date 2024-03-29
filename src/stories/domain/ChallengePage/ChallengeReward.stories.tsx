import ChallengeReward from "@/domain/ChallengePage/ChallengeReward";

export default {
  title: "Domain/ChallengePage/ChallengeReward",
  component: ChallengeReward,
  argTypes: {
    startDate: { defaultValue: "2022.05.23", control: "text" },
    endDate: { defaultValue: "2022.06.23", control: "text" },
    reward: { defaultValue: "가지고 싶던 운동화 사기", control: "text" },
    restDay: { defaultValue: 5, control: "number" },
  },
};

export const Default = (args: any) => {
  return <ChallengeReward {...args} />;
};
