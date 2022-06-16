import React from "react";
import { Text } from "@chakra-ui/react";

type textTypes = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
};

const ChakraText = ({ children, size }: textTypes) => {
  return (
    <Text textAlign="center" fontSize={size}>
      {children}
    </Text>
  );
};

export default ChakraText;
