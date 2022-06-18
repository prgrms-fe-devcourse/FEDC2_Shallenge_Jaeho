import TextLayout from "@layout/TextLayout";
import ChallengeReward from "@domain/ChallengePage/ChallengeReward";
import { Circle, Flex } from "@chakra-ui/react";
import CertificationTable from "@domain/ChallengePage/CertificationTable";
import CommentButton from "@domain/ChallengePage/CommentButton";
import CheerUpButton from "@domain/ChallengePage/CheerUpButton";
import CertificationButton from "@domain/ChallengePage/CertificationButton";

const dummyData = [
  { day: 1, isChecked: true },
  { day: 2, isChecked: true },
  { day: 3, isChecked: false },
  { day: 4, isChecked: true },
  { day: 5, isChecked: false },
  { day: 6, isChecked: false },
  { day: 7, isChecked: true },
  { day: 8, isChecked: true },
  { day: 9, isChecked: false },
  { day: 10, isChecked: false },
  { day: 11, isChecked: true },
  { day: 12, isChecked: true },
  { day: 13, isChecked: true },
  { day: 14, isChecked: false },
  { day: 15, isChecked: true },
  { day: 16, isChecked: true },
  { day: 17, isChecked: true },
  { day: 18, isChecked: true },
  { day: 19, isChecked: true },
  { day: 20, isChecked: false },
  { day: 21, isChecked: false },
  { day: 22, isChecked: true },
  { day: 23, isChecked: false },
  { day: 24, isChecked: true },
  { day: 25, isChecked: false },
  { day: 26, isChecked: false },
  { day: 27, isChecked: true },
  { day: 28, isChecked: true },
  { day: 29, isChecked: false },
  { day: 30, isChecked: false },
];

const ChallengePage = () => {
  const ChallengeTitle = "Challenge 제목"; // title.challengeTitle
  const reward = "보상 내용"; // title.reward
  const commentCount = 0; // comments.length
  const cheerUpCount = 0; // likes.length
  const days = dummyData; // title.days
  const startDate = "2022.05.23"; // title.startDate
  const presentDay = 0; // (계산) 현재날짜 - 시작일, 최소값 0
  const restDay = 30 - presentDay; // (계산) 30 - presentDay, 최대값 30
  const endDate = "2022.06.23"; // (계산) 시작일 + 30
  const isActive = true; // days[presentDay].isChecked
  const isGuest = true; // _id 값과 비교할 현재 유저 _id
  return (
    <TextLayout text={ChallengeTitle}>
      <Flex marginTop="16px">
        <ChallengeReward
          startDate={startDate}
          endDate={endDate}
          reward={reward}
          restDay={restDay}
        ></ChallengeReward>
      </Flex>
      <Flex
        margin="40px 45px"
        direction="column"
        alignItems="center"
        maxWidth="520px"
        w="100%"
        bg="#FFFFFF"
        borderRadius="15px"
      >
        <Flex margin="60px 90px">
          <CertificationTable days={days}></CertificationTable>
        </Flex>
        <Flex gap="160px" marginBottom="26px">
          <CommentButton count={commentCount}></CommentButton>
          <CheerUpButton count={cheerUpCount}></CheerUpButton>
        </Flex>
      </Flex>
      {!isGuest && (
        <Circle
          position="absolute"
          left="50%"
          transform="translate(-50%, 0%)"
          bottom="60px"
          zIndex={2}
        >
          <CertificationButton isActive={isActive}></CertificationButton>
        </Circle>
      )}
    </TextLayout>
  );
};

export default ChallengePage;
