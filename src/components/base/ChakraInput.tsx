import { Input } from "@chakra-ui/react";

type inputTypes = {
  placeholder: string;
  variant: string;
  size?: string;
  width?: number;
  type?: string;
};

const ChakraInput = ({
  placeholder = "placeholder입니다",
  variant = "outline",
  size = "lg",
  width = 400,
  type = "text",
}: inputTypes) => {
  const bgColor = variant === "outline" ? "#FFFFFF" : "#E2E8F0";
  return (
    <Input
      type={type}
      placeholder={placeholder}
      size={size}
      width={width}
      variant={variant}
      bg={bgColor}
      _hover={{ bg: bgColor }}
    />
  );
};

export default ChakraInput;
