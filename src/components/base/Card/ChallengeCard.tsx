type ChallengeCardProps = {
  title: string;
  reward: string;
  avatarSrc: string;
  commentCnt: number;
  cheerCnt: number;
  styleProps?: object;
  onClick?: () => void;
};

const ChallengeCard = ({
  avatarSrc,
  title,
  reward,
  commentCnt,
  cheerCnt,
  styleProps = {},
  onClick,
}: ChallengeCardProps) => {
  return <div></div>;
};

export default ChallengeCard;
