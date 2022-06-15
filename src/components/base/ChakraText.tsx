import React from "react";
import { Text, TypographyProps } from "@chakra-ui/react";

type textTypes = {
  children: React.ReactNode;
  size?: string;
  align?: TypographyProps["textAlign"];
  color?: string;
};

const ChakraText = ({
  children,
  size = "lg",
  align = "center",
  color = "black",
}: textTypes) => {
  return (
    <Text textAlign={align} fontSize={size} color={color}>
      {children}
    </Text>
  );
};

export default ChakraText;
