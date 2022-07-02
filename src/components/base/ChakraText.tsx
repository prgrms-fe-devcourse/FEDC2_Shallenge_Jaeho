import React from "react";

import { Text } from "@chakra-ui/react";

type textTypes = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
};

const ChakraText = ({ children, size = "lg", color = "black" }: textTypes) => {
  return (
    <Text textAlign="center" fontSize={size} color={color}>
      {children}
    </Text>
  );
};

export default ChakraText;
