import { Input } from "@chakra-ui/react";

type inputTypes = {
  text: string;
  size?: string;
  width?: number;
  type?: string;
  variant?: string;
  bgColor?: string;
};

const ChakraInput = ({
  text,
  size = "lg",
  width = 400,
  type = "text",
  variant = "outline",
  bgColor = "#FFFFFF",
}: inputTypes) => {
  return (
    <Input
      type={type}
      placeholder={text}
      size={size}
      width={width}
      variant={variant}
      bg={bgColor}
      _hover={{ bg: bgColor }}
    />
  );
};

export default ChakraInput;
