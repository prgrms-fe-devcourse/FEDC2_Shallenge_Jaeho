type ChallangeCardProps = {
  title: string;
  reward: string;
  avatarSrc: string;
  commentCnt: number;
  cheerCnt: number;
  styleProps?: object;
  onClick?: () => void;
};

const ChallangeCard = ({
  avatarSrc,
  title,
  reward,
  commentCnt,
  cheerCnt,
  styleProps = {},
  onClick,
}: ChallangeCardProps) => {
  return <div></div>;
};

export default ChallangeCard;
