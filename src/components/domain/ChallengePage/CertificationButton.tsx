import { Circle } from "@chakra-ui/react";
import Icon from "@base/Icon";

type activeType = {
  isActive: boolean;
};

const ChallengeCertificationButton = ({ isActive }: activeType) => {
  const bgColor = isActive ? "#FF7900" : "#D9D9D9";
  const name = isActive ? "arrow-up" : "check";
  const color = isActive ? "#FFFFFF" : "#000000";

  return (
    <Circle size="115px" bg={bgColor}>
      <Icon name={name} color={color} />
    </Circle>
  );
};

export default ChallengeCertificationButton;
