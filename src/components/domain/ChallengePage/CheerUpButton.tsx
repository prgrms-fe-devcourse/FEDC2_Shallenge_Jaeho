import Social from "@base/Social";
import { Center } from "@chakra-ui/react";

type CheerUpButtonType = {
  isCheered: boolean;
  count: number;
};

const CheerUpButton = ({ isCheered = false, count }: CheerUpButtonType) => {
  const bgColor = isCheered ? "#FFAA6D" : "#FFFFFF";
  const fill = isCheered ? "#F4F6F8" : "#000000";
  const color = isCheered ? "#F4F6F8" : "#000000";
  return (
    <Center
      w="120px"
      h="72px"
      borderRadius="15px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      bgColor={bgColor}
      fill={fill}
      color={color}
      _hover={
        isCheered ? { bg: "#FF7900" } : { color: "#FF7900", fill: "#FF7900" }
      }
    >
      <Social type="cheer" size="main" count={count} />
    </Center>
  );
};

export default CheerUpButton;
