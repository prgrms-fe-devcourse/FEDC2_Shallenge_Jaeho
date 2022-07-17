import Card from "@base/Card";
import { Avatar, Heading, Text, Box, Flex } from "@chakra-ui/react";
interface Props {
  title: string;
  reward: string;
  avatarSrc: string;
  commentCnt: number;
  cheerCnt: number;
  styleProps?: object;
  onClick?: () => void;
}

const ChallengeCard = ({
  avatarSrc,
  title,
  reward,
  commentCnt,
  cheerCnt,
  styleProps = {},
  onClick,
}: Props) => {
  return <div></div>;
};

export default ChallengeCard;
