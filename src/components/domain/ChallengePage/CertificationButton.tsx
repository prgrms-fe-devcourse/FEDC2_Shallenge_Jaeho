import { Circle } from "@chakra-ui/react";
import Icon from "@base/Icon";

type CertificationButtonType = {
  color?: "#FF7900" | "#D9D9D9";
  name?: "arrow-up" | "check";
};

const ChallengeCertificationButton = ({
  color = "#FF7900",
  name = "arrow-up",
}: CertificationButtonType) => {
  return (
    <Circle size="115px" bg={color}>
      <Icon name={name} />
    </Circle>
  );
};

export default ChallengeCertificationButton;
