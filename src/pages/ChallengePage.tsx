import TextLayout from "@layout/TextLayout";
import ChallengeReward from "@domain/ChallengePage/ChallengeReward";
import { Circle, Flex } from "@chakra-ui/react";
import CertificationTable from "@domain/ChallengePage/CertificationTable";
import CommentButton from "@domain/ChallengePage/CommentButton";
import CheerUpButton from "@domain/ChallengePage/CheerUpButton";
import CertificationButton from "@domain/ChallengePage/CertificationButton";

type CertificationBoxType = {
  day: number;
  isChecked: boolean;
};

type ChallengePageType = {
  isGuest?: boolean;
  title?: string;
  startDate?: string;
  endDate?: string;
  reward?: string;
  restDay?: number;
  days?: Array<CertificationBoxType> | undefined;
  commentCount?: number | undefined;
  CheerUpCount?: number | undefined;
  isActive?: boolean;
};

const ChallengePage = ({
  isGuest = true,
  title = "Challenge 제목",
  startDate = "2022.05.23",
  endDate = "2022.06.23",
  reward = "보상 내용",
  restDay = 30,
  days,
  commentCount = 0,
  CheerUpCount = 0,
  isActive = true,
}: ChallengePageType) => {
  return (
    <TextLayout text={title}>
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
          <CheerUpButton count={CheerUpCount}></CheerUpButton>
        </Flex>
      </Flex>
      {isGuest ? undefined : (
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
