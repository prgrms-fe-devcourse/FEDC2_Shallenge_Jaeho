import React from "react";
import { Text, TypographyProps } from "@chakra-ui/react";

type textTypes = {
  children: React.ReactNode;
  size: string;
  align?: TypographyProps["textAlign"];
};

const ChakraText = ({ children, size, align }: textTypes) => {
  return (
    <Text textAlign={align} fontSize={size}>
      {children}
    </Text>
  );
};

export default ChakraText;
