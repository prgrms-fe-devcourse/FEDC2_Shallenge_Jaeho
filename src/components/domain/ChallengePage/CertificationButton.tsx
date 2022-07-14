import { Circle } from "@chakra-ui/react";
import Icon from "@base/Icon";

interface Props {
  isActive?: boolean;
}

const CertificationButton = ({ isActive }: Props) => {
  const bgColor = isActive ? "#FF7900" : "#D9D9D9";
  const name = isActive ? "arrow-up" : "check";
  const color = isActive ? "#FFFFFF" : "#000000";
  const hoverBgColor = isActive ? "#FFAA6D" : undefined;
  const cursor = isActive ? "pointer" : undefined;

  return (
    <Circle
      size="115px"
      bg={bgColor}
      cursor={cursor}
      _hover={{ bg: hoverBgColor }}
    >
      <Icon name={name} color={color} />
    </Circle>
  );
};

export default CertificationButton;
