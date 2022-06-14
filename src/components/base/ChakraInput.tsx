import { Input } from "@chakra-ui/react";

type inputTypes = {
  text: string;
  size?: string;
  width?: number;
  type?: string;
};

const ChakraInput = ({
  text,
  size = "lg",
  width = 400,
  type = "text",
}: inputTypes) => {
  return (
    <Input
      type={type}
      placeholder={text}
      size={size}
      width={width ? width : undefined}
    />
  );
};

export default ChakraInput;
