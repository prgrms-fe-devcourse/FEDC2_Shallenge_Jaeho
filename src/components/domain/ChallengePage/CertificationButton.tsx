import { Circle } from "@chakra-ui/react";
import Icon from "@base/Icon";

type CertificationButtonType = {
  bgColor?: "#FF7900" | "#D9D9D9";
  name?: "arrow-up" | "check";
  color?: "#FFFFFF" | "#000000";
};

const ChallengeCertificationButton = ({
  bgColor = "#FF7900",
  name = "arrow-up",
  color = "#FFFFFF",
}: CertificationButtonType) => {
  return (
    <Circle size="115px" bg={bgColor}>
      <Icon name={name} color={color} />
    </Circle>
  );
};

export default ChallengeCertificationButton;
